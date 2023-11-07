import csv
import json
from io import StringIO
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import CSVUploadForm
from .models import ModeloDinamico #CamposDinamicos
from .db_utils import criar_tabela

def upload_csv(request):
    if request.method == 'POST':
        form = CSVUploadForm(request.POST, request.FILES)
        if form.is_valid():
            csv_arq = form.cleaned_data['csv_arq']
            arq_formatado = csv_arq.read().decode('utf-8').splitlines()
            dic_csv = csv.DictReader(arq_formatado)

            dados_csv = list(dic_csv)
            csv_arq.seek(0)

            criar_tabela(csv.DictReader(arq_formatado))

            campos = dados_csv[0].keys()

            modelo_dinamico = ModeloDinamico.objects.create(data=[])
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

def sucesso(request):
    return render(request, 'api/sucesso.html')

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
    return render(request, 'api/lista_objetos.html', dicionario)
