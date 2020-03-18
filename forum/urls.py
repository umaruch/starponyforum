"""forum URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from django.contrib import admin
from forummain import views
urlpatterns = [ 
    path('', views.themesList),
    path('admin/', admin.site.urls),
    path('updatethemes/', views.updateThemesList),
    path('updatemessages/', views.updateMessageList),
    path('login/', views.UserLogin),
    path('logout/', views.UserLogout),   
    path('register/', views.UserRegister),
    path('addtheme/', views.addTheme),
    path('addmessage/', views.addMessage),
    #path('search/', views.search)
    #register/user=usernamepass=password
    #login/user=username?pass=password
]
