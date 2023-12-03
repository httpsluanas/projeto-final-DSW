from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.uploadFile, name='uploadFile'),
    path('lista_objetos/<int:id>/', views.userData, name='user_data'),
    path('campos_tabelas/', views.defaultDataTable, name='defaultDataTable'),
    path('processar_formulario/', views.processar_formulario, name='processar_formulario'),
    path('userHistory/', views.userHistory, name='userHistory'),
    path('userHistory/<int:id>/delete/', views.userHistoryDelete, name='userHistoryDelete'),
    path('userHistory/<int:id>/edit/', views.userHistoryEdit, name='userHistoryEdit'),
    path('check_availability/', views.CheckAvailabilityView.as_view(), name='check_availability'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.login, name='login'),
]