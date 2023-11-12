from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_csv, name='upload_csv'),
    path('lista_objetos/', views.lista_de_objetos, name='lista_objetos'),
    path('campos_tabelas/', views.lista_campos_tabelas, name='campos_tabelas'),
    path('userFile/', views.user_file, name='user_file'),
    path('userFile/<int:id>/delete/', views.delete_file, name='delete_file'),
    path('userFile/<int:id>/edit/', views.edit_file, name='edit_file'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.login, name='login'),
]
