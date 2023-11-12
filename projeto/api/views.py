import csv
import json
from io import StringIO
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import CSVUploadForm
from .models import *
from .db_utils import criar_tabela
from django.apps import apps
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from .serializers import CustomUserSerializer, LoginSerializer
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

CustomUser = get_user_model()

def upload_csv(request):
    if request.method == 'POST':
        form = CSVUploadForm(request.POST, request.FILES)
        if form.is_valid():
            csv_arq = form.cleaned_data['csv_arq']
            nome_arquivo = csv_arq.name
            arq_formatado = csv_arq.read().decode('utf-8').splitlines()
            dic_csv = csv.DictReader(arq_formatado)

            dados_csv = list(dic_csv)
            csv_arq.seek(0)

            criar_tabela(csv.DictReader(arq_formatado))

            campos = dados_csv[0].keys()

            #modelo_dinamico = ModeloDinamico.objects.create(data=[])
            modelo_dinamico = ModeloDinamico.objects.create(nome=nome_arquivo)
            """ for campo in campos:
                CamposDinamicos.objects.create(modelo_dinamico=modelo_dinamico, nome_campo=campo) """

            dados_dinamicos = []
            for linha in dados_csv:
                linha_dados = {}
                for campo in campos:
                    linha_dados[campo] = linha[campo]
                dados_dinamicos.append(linha_dados)

            modelo_dinamico.data = json.dumps(dados_dinamicos)
            modelo_dinamico.save()

            return HttpResponse(status=200)
    else:
        form = CSVUploadForm()

    return render(request, 'frontend/index.html', {'form': form})

def lista_de_objetos(request):
    objetos = ModeloDinamico.objects.all()
    objetos_json = []

    for objeto in objetos:
        try:
            dados = json.loads(objeto.data)
            objetos_json.extend(dados)
        except json.JSONDecodeError:
            pass

    #campos = CamposDinamicos.objects.filter(modelo_dinamico=objetos.first())
    campos_nomes = [campo.nome_campo for campo in campos]
    dicionario = {'objetos': objetos_json, 'campos': campos_nomes}

    # return render(request, 'api/lista_objetos.html', dicionario)
    return JsonResponse(dicionario, safe=False)

def lista_campos_tabelas(request):
    modelos = [EquipamentoPublico, Geometria, Proprietario, RRR, Imovel, ModeloDinamico]

    campos_tabelas = {}

    for model in modelos:
        nome_modelo = model._meta.object_name
        campos = [field.name for field in model._meta.get_fields() if field.concrete]

        campos_tabelas[nome_modelo] = campos

    # return render(request, 'frontend/lista_campos_tabelas.html', {'campos_tabelas': campos_tabelas})
    return JsonResponse(campos_tabelas, safe=False)

def user_file(request):
    dados = ModeloDinamico.objects.values()
    return JsonResponse(list(dados), safe=False)

@csrf_exempt 
@require_http_methods(["DELETE"])
def delete_file(request, id):
    try:
        objeto_para_excluir = ModeloDinamico.objects.get(pk=id)
        objeto_para_excluir.delete()
        return JsonResponse({'mensagem': 'Objeto excluído com sucesso.'})
    except ModeloDinamico.DoesNotExist:
        return JsonResponse({'erro': 'O objeto não foi encontrado.'}, status=404)
    except Exception as e:
        return JsonResponse({'erro': str(e)}, status=500)
    
@csrf_exempt
@require_http_methods(["PATCH"])
def edit_file(request, id):
    try:
        objeto_para_editar = ModeloDinamico.objects.get(pk=id)

        # Obtenha os dados do corpo da requisição JSON
        dados = json.loads(request.body.decode('utf-8'))

        # Suponha que você esteja recebendo o novo nome no campo 'nome'
        novo_nome = dados.get('nome', None)
        
        if novo_nome is not None:
            objeto_para_editar.nome = novo_nome
            objeto_para_editar.save()

            return JsonResponse({'mensagem': 'Campo editado com sucesso.'})
        else:
            return JsonResponse({'erro': 'O novo nome não foi fornecido.'}, status=400)

    except ModeloDinamico.DoesNotExist:
        return JsonResponse({'erro': 'O objeto não foi encontrado.'}, status=404)
    except Exception as e:
        return JsonResponse({'erro': str(e)}, status=500)
    

class RegisterView(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    # Obtenha as credenciais do corpo da solicitação
    username = request.data.get('username')
    password = request.data.get('password')

    # Autentique o usuário
    user = authenticate(request, username=username, password=password)

    if user is not None:
        # Construa o objeto de resposta com informações do usuário
        user_info = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            # Adicione outros campos conforme necessário
        }

        # Obtenha ou crie um token para o usuário autenticado
        token, created = Token.objects.get_or_create(user=user)

        return Response({'token': token.key, 'user_info': user_info}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_401_UNAUTHORIZED)