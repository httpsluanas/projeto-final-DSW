from django.db import models

class ModeloDinamico(models.Model):
    data = models.TextField()  # O campo onde você armazena o JSON como uma string

""" class CamposDinamicos(models.Model):
    modelo_dinamico = models.ForeignKey(ModeloDinamico, on_delete=models.CASCADE)
    nome_campo = models.CharField(max_length=255)  # Nome do campo dinâmico

    def __str__(self):
        return self.nome_campo
 """