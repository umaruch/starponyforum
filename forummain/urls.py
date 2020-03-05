from . import views
from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url = '/themes/', permanent = True)),
    path('themes/', views.themesList, name='themes'),
    path('admin/', admin.site.urls)
]