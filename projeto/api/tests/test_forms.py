from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from ..forms import CSVUploadForm

class CSVUploadFormTest(TestCase):

    def test_formulario_valido(self):
        csv_data = "nome,sobrenome,endereco\njoao,silva,rua x"
        csv_file = SimpleUploadedFile("test_data.csv", csv_data.encode())

        form = CSVUploadForm(files={'csv_arq': csv_file})

        self.assertTrue(form.is_valid())