from django.urls import path
from .views import index
from api.views import lista_campos_tabelas

urlpatterns = [
    path('', index),
    path('campos_tabelas/', lista_campos_tabelas, name='campos_tabelas')
    ]