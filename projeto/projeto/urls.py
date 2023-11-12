from django.contrib import admin
from django.urls import path, include, re_path
from api import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', include('frontend.urls')),
    path('', TemplateView.as_view(template_name="index.html"))
]