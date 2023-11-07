from django.db import models

class ModeloDinamico(models.Model):
    data = models.TextField()
    nome = models.CharField(max_length=255, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)


""" class CamposDinamicos(models.Model):
    modelo_dinamico = models.ForeignKey(ModeloDinamico, on_delete=models.CASCADE)
    nome_campo = models.CharField(max_length=255)  # Nome do campo dinâmico

    def __str__(self):
        return self.nome_campo
 """

class EquipamentoPublico(models.Model):
    id_equipamento = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=20)
    tipo = models.CharField(max_length=20)

class Geometria(models.Model):
    id_geom = models.AutoField(primary_key=True)
    centroide = models.CharField(max_length=20)
    area = models.CharField(max_length=20)

class Proprietario(models.Model):
    id_proprietario = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=20)
    data_nasc = models.DateField()
    cpf = models.CharField(max_length=20)

class RRR(models.Model):
    id_RRR = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=20)
    descricao = models.CharField(max_length=20)
    data_inicio = models.DateField()
    data_termino = models.DateField()

class Imovel(models.Model):
    id_imovel = models.AutoField(primary_key=True)
    endereco = models.CharField(max_length=20)
    tipo = models.CharField(max_length=20)
    area = models.CharField(max_length=20)
    proprietario = models.ForeignKey(Proprietario, on_delete=models.CASCADE)
    rrr = models.ForeignKey(RRR, on_delete=models.CASCADE)
    equipamento_publico = models.ForeignKey(EquipamentoPublico, on_delete=models.CASCADE)
    geometria = models.ForeignKey(Geometria, on_delete=models.CASCADE)
 