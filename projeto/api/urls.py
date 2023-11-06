from django.urls import path
from . import views

urlpatterns = [
    path('upload-csv/', views.upload_csv, name='upload_csv'),
    path('lista/', views.lista_de_objetos, name='lista_de_objetos'),
    path('sucesso/', views.sucesso, name='sucesso')
]
