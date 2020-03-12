from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import logout
#from django.core import serializers
from .models import Theme, Message

# Create your views here.
def themesList(request):
    return render(
        request,
        'index.html'
    )

def updateThemesList(request):
    if request.is_ajax and request.method == "GET":
        page = int(request.GET.get('p'))
        page=page*5
        k = list(Theme.objects.all().values())[page-5:page]
        return JsonResponse( (k), safe=False)


def updateMessageList(request):
    if request.is_ajax and request.method == "GET":
        pass


def updateMessagesList(request):
    print("Hello")

def UserLogout(request):
    logout(request)
    return JsonResponse({'status': 1}, safe = False)
