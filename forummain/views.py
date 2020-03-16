from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import logout, login, authenticate

from django.contrib.auth.models import User
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

def addTheme(request):
    if request.is_ajax and request.method == "GET":
        if request.user.is_authenticated:
            title = request.GET.get('title')
            theme = Theme.objects.create(title=title,author=request.user)
            theme.save()
            return JsonResponse({'status': 1})

def addMessage(request):
    if request.is_ajax and request.method == "POST":
        pass

        

def updateMessageList(request):
    if request.is_ajax and request.method == "GET":
        pass


#Операции с БД Пользователя
def UserLogin(request):
    if request.is_ajax and request.method == "GET":
        username = request.GET.get("username")
        password = request.GET.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request,user)
            return JsonResponse({'status': 1}, safe = False)
        else:
            return JsonResponse({'status': 0}, safe = False)


def UserLogout(request):
    if request.is_ajax and request.method == "GET":
        logout(request)
        return JsonResponse({'status': 1}, safe = False)


def UserRegister(request):
    if request.is_ajax and request.method == "GET":
        username = request.GET.get('name')
        pass1 = request.GET.get('p1')
        pass2 = request.GET.get('p2')

        if pass1!=pass2:
            return JsonResponse({'status': 1}, safe=False)

        else:
            user = User.objects.create_user(username=username, password=pass1)
            user.is_staff = True
            user.save()
            return JsonResponse({'status': 0}, safe=False)