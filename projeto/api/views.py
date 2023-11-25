import csv
import json
from django.http import HttpResponse
from django.shortcuts import render
from .forms import CSVUploadForm
from .models import *
from .db_utils import createTable
from django.apps import apps
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from .serializers import CustomUserSerializer
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.db import transaction
from django.shortcuts import get_object_or_404
from .models import EquipamentoPublico, Geometria, Proprietario, RRR, Imovel

CustomUser = get_user_model()

@transaction.atomic
def uploadFile(request):
    if request.method == 'POST':
        form = CSVUploadForm(request.POST, request.FILES)
        if form.is_valid():
            try:
                csvFile = form.cleaned_data['csv_arq']
                fileName = csvFile.name
                formattedFile = csvFile.read().decode('utf-8').splitlines()
                dic_csv = csv.DictReader(formattedFile)

                csvData = list(dic_csv)
                csvFile.seek(0)

                createTable(dic_csv)

                fields = csvData[0].keys()

                # Gere o id no backend antes de criar o objeto
                dinamicModel = ModeloDinamico.objects.create(nome=fileName)
                id = dinamicModel.id  # Agora você tem o id gerado no backend

                dinamicData = []
                for line in csvData:
                    dataLine = {}
                    for field in fields:
                        dataLine[field] = line[field]
                    dinamicData.append(dataLine)

                dinamicModel.data = json.dumps(dinamicData)
                dinamicModel.save()

                response_data = {'id': id}
                return JsonResponse(response_data)
            except Exception as e:
                print(f"Erro ao processar: {e}")
                return JsonResponse({'error': 'Erro interno ao processar a solicitação'}, status=500)
        else:
            return JsonResponse({'error': 'Formulário inválido'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)

def userData(request, id):
    modelo_dinamico = get_object_or_404(ModeloDinamico, id=id)

    try:
        objectsJson = json.loads(modelo_dinamico.data)
    except json.JSONDecodeError:
        objectsJson = []

    if objectsJson and isinstance(objectsJson, list):
        first_object = objectsJson[0] if objectsJson else {}
        fieldsName = list(first_object.keys())
    else:
        fieldsName = []

    return JsonResponse(fieldsName, safe=False)

def defaultDataTable(request):
    models = [EquipamentoPublico, Geometria, Proprietario, RRR, Imovel]

    tables = []

    for model in models:
        modelName = model._meta.object_name
        fields = [field.name for field in model._meta.get_fields() if field.concrete]

        table = {
            'name': modelName,
            'fields': fields,
        }

        tables.append(table)

    return JsonResponse(tables, safe=False)

def processar_formulario(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            equipamento_data = data.get('equipamento', {})
            geometria_data = data.get('geometria', {})
            proprietario_data = data.get('proprietario', {})
            rrr_data = data.get('rrr', {})
            imovel_data = data.get('imovel', {})

            # Criar instâncias dos modelos sem salvar no banco de dados ainda
            equipamentoPublico = EquipamentoPublico(**equipamento_data)
            geometria = Geometria(**geometria_data)
            proprietario = Proprietario(**proprietario_data)
            rrr = RRR(**rrr_data)

            # Salvando no banco de dados
            equipamentoPublico.save()
            geometria.save()
            proprietario.save()
            rrr.save()

            # Criar instância de Imovel e associar às instâncias relacionadas
            imovel = Imovel.objects.create(
                endereco=imovel_data.get('endereco', ''),
                tipo=imovel_data.get('tipo', ''),
                area=imovel_data.get('area', ''),
                proprietario=proprietario,
                rrr=rrr,
                equipamento_publico=equipamentoPublico,
                geometria=geometria,
            )

            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    else:
        return JsonResponse({'status': 'error', 'message': 'Método não permitido'})

def userHistory(request):
    return JsonResponse(list(ModeloDinamico.objects.values()), safe=False)

@csrf_exempt 
@require_http_methods(["DELETE"])
def userHistoryDelete(request, id):
    try:
        ModeloDinamico.objects.get(pk=id).delete()
        return JsonResponse({'mensagem': 'Objeto excluído com sucesso.'})
    except ModeloDinamico.DoesNotExist:
        return JsonResponse({'erro': 'O objeto não foi encontrado.'}, status=404)
    except Exception as e:
        return JsonResponse({'erro': str(e)}, status=500)
    
@csrf_exempt
@require_http_methods(["PATCH"])
def userHistoryEdit(request, id):
    try:
        object = ModeloDinamico.objects.get(pk=id)
        data = json.loads(request.body.decode('utf-8'))
        newName = data.get('nome', None)
        
        if newName is not None:
            object.nome = newName
            object.save()

            return JsonResponse({'mensagem': 'Campo editado com sucesso.'})
        else:
            return JsonResponse({'erro': 'O novo nome não foi fornecido.'}, status=400)

    except ModeloDinamico.DoesNotExist:
        return JsonResponse({'erro': 'O objeto não foi encontrado.'}, status=404)
    except Exception as e:
        return JsonResponse({'erro': str(e)}, status=500)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        user_info = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
        }
        token, created = Token.objects.get_or_create(user=user)

        return Response({'token': token.key, 'user_info': user_info}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

class RegisterView(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class CheckAvailabilityView(CreateAPIView):
    def get(self, request):
        emails = CustomUser.objects.values_list('email', flat=True)
        usernames = CustomUser.objects.values_list('username', flat=True)

        return Response({'emails': emails, 'usernames': usernames}, status=status.HTTP_200_OK)