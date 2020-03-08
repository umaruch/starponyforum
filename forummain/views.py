from django.shortcuts import render
from django.http import JsonResponse
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
        k = list(Theme.objects.all().values())
        print(k)
        return JsonResponse( (k), safe=False)