from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _

class ModeloDinamico(models.Model):
    data = models.TextField()
    nome = models.CharField(max_length=255, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)


class CamposDinamicos(models.Model):
    modelo_dinamico = models.ForeignKey(ModeloDinamico, on_delete=models.CASCADE)
    nome_campo = models.CharField(max_length=255)

    def __str__(self):
        return self.nome_campo

class EquipamentoPublico(models.Model):
    id_equipamento = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=20, null=True, blank=True)
    tipo = models.CharField(max_length=20, null=True, blank=True)

class Geometria(models.Model):
    id_geom = models.AutoField(primary_key=True)
    centroide = models.CharField(max_length=20, null=True, blank=True)
    area = models.CharField(max_length=20, null=True, blank=True)

class Proprietario(models.Model):
    id_proprietario = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=20, null=True, blank=True)
    data_nasc = models.DateField(null=True, blank=True)
    cpf = models.CharField(max_length=20, null=True, blank=True)

class RRR(models.Model):
    id_RRR = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=20, null=True, blank=True)
    descricao = models.CharField(max_length=20, null=True, blank=True)
    data_inicio = models.DateField(null=True, blank=True)
    data_termino = models.DateField(null=True, blank=True)

class Imovel(models.Model):
    id_imovel = models.AutoField(primary_key=True)
    endereco = models.CharField(max_length=20, null=True, blank=True)
    tipo = models.CharField(max_length=20, null=True, blank=True)
    area = models.CharField(max_length=20, null=True, blank=True)
    proprietario = models.ForeignKey(Proprietario, on_delete=models.CASCADE, null=True, blank=True)
    rrr = models.ForeignKey(RRR, on_delete=models.CASCADE, null=True, blank=True)
    equipamento_publico = models.ForeignKey(EquipamentoPublico, on_delete=models.CASCADE, null=True, blank=True)
    geometria = models.ForeignKey(Geometria, on_delete=models.CASCADE, null=True, blank=True)

class AdminUser(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    email = models.CharField(max_length=90)
    password = models.CharField(max_length=90)

class CustomUser(AbstractUser):
    groups = models.ManyToManyField(Group, related_name='customuser_set', blank=True)
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',
        verbose_name=_('user permissions'),
        blank=True,
    )
