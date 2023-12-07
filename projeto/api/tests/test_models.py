from django.test import TestCase
from model_mommy import mommy
from ..models import (ModeloDinamico, EquipamentoPublico, Geometria, Proprietario, RRR, Imovel, AdminUser, CustomUser)

class ModelsTest(TestCase):

    def test_modelo_dinamico_creation(self):
        modelo_dinamico = mommy.make(ModeloDinamico)

        self.assertIsInstance(modelo_dinamico, ModeloDinamico)

    def test_equipamento_publico_creation(self):
        equipamento_publico = mommy.make(EquipamentoPublico)

        self.assertIsInstance(equipamento_publico, EquipamentoPublico)

    def test_geometria_creation(self):
        geometria = mommy.make(Geometria)

        self.assertIsInstance(geometria, Geometria)

    def test_proprietario_creation(self):
        proprietario = mommy.make(Proprietario)

        self.assertIsInstance(proprietario, Proprietario)

    def test_rrr_creation(self):
        rrr = mommy.make(RRR)

        self.assertIsInstance(rrr, RRR)

    def test_imovel_creation(self):
        imovel = mommy.make(Imovel)

        self.assertIsInstance(imovel, Imovel)

    def test_admin_user_creation(self):
        admin_user = mommy.make(AdminUser)

        self.assertIsInstance(admin_user, AdminUser)

    def test_custom_user_creation(self):
        custom_user = mommy.make(CustomUser)

        self.assertIsInstance(custom_user, CustomUser)
