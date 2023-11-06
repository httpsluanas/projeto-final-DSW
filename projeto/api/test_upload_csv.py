from django.test import TestCase
from django.urls import reverse
from django.core.files.uploadedfile import SimpleUploadedFile
from .models import ModeloDinamico
from django.test import Client


class UploadCSVTest(TestCase):
    def test_upload_csv(self):
        client = Client()

        # Crie um arquivo CSV de exemplo para envio
        csv_data = "name,description,price\nProduct1,Description1,10.00\nProduct2,Description2,15.00"
        csv_arq = SimpleUploadedFile("data.csv", csv_data.encode())

        # Simule o envio do arquivo CSV para a URL de upload
        response = client.post(reverse('upload_csv'), {'csv_arq': csv_arq}, follow=True)

        # Verifique se a resposta HTTP é 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Verifique se os dados foram salvos no banco de dados, se aplicável
        # Por exemplo, verifique a contagem de objetos do modelo ModeloDinamico
        self.assertEqual(ModeloDinamico.objects.count(), 1)
