from django import forms

class CSVUploadForm(forms.Form):
    csv_arq = forms.FileField()