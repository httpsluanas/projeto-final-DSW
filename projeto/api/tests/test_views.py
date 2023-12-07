""" import csv
from django.test import TestCase, Client
from django.core.files.uploadedfile import SimpleUploadedFile
from model_mommy import mommy
import json
from ..models import ModeloDinamico, CustomUser
from ..forms import CSVUploadForm
import datetime


class ViewsTest(TestCase):

    def setUp(self):
        self.user = CustomUser.objects.create_user(username='testuser', password='testpassword')

    def test_upload_file_view(self):
        client = Client()

        client.login(username='testuser', password='testpassword')

        # Criar um arquivo CSV fictício
        csv_data = "campo1,campo2,campo3\nvalor1,valor2,valor3"
        csv_file = SimpleUploadedFile("test_data.csv", csv_data.encode())

        # Enviar a requisição POST para a view
        response = client.post('/upload/', {'csv_arq': csv_file})

        # Verificar se a resposta é 200 OK
        self.assertEqual(response.status_code, 200)

        # Verificar se o modelo correspondente foi criado
        modelo_dinamico = ModeloDinamico.objects.first()
        if modelo_dinamico is not None:
            print(f'Modelo Dinâmico criado: {modelo_dinamico.id}')
        else:
            print('Modelo Dinâmico não foi criado.')

        # Processar o arquivo CSV e criar instâncias do modelo
        decoded_file = csv_file.read().decode('utf-8').splitlines()
        csv_reader = csv.reader(decoded_file)

        for row in csv_reader:
            # Adicionar cada linha como uma instância do modelo
            ModeloDinamico.objects.create(
                data=row[0],  # Supondo que "data" é a primeira coluna no CSV
                nome=row[1],  # Supondo que "nome" é a segunda coluna no CSV
                timestamp=datetime.now(),
            )
            print(f'Linha do CSV processada: {row}')

    def test_user_data_view(self):
        client = Client()

        # Criar um modelo dinâmico fictício
        modelo_dinamico = mommy.make(ModeloDinamico)
        id_modelo = modelo_dinamico.id

        # Enviar a requisição GET para a view
        response = client.get(f'/lista_objetos/{id_modelo}/')

        # Verificar se a resposta é 200 OK
        self.assertEqual(response.status_code, 200)

        # Tentar decodificar o conteúdo JSON
        try:
            data = json.loads(response.content)
            print(f'Dados retornados pela view: {data}')

            # Verificar se os dados correspondem ao esperado
            self.assertEqual(data, ["campo1", "campo2", "campo3"])

        except json.decoder.JSONDecodeError as e:
            print(f'Erro ao decodificar JSON: {e}')
            print(f'Conteúdo da resposta: {response.content}') """