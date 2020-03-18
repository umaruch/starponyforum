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
        print(k)
        return JsonResponse(k, safe=False)

def addTheme(request):
    if request.is_ajax and request.method == "GET":
        if request.user.is_authenticated:
            title = request.GET.get('title')
            theme = Theme.objects.create(title=title,author=request.user)
            theme.save()
            k = list(Theme.objects.all().values())[0:5]
            return JsonResponse(k, safe=False)




def addMessage(request):
    if request.is_ajax and request.method == "GET":
        if request.user.is_authenticated:
            text = request.GET.get('text')
            id_text = request.GET.get('id')
            id = int(id_text[1:len(id_text)])
            mes = Message.objects.create(text=text,author=request.user, theme_id=id)
            mes.save()
            k=list(Message.objects.filter(theme_id=id).values())[0:5]
            return JsonResponse(k, safe=False)

        

def updateMessageList(request):
    if request.is_ajax and request.method == "GET":
        title_id = int(request.GET.get('id'))
        page = int(request.GET.get('p'))
        page=page*5
        k=list(Message.objects.filter(theme_id=title_id).values())[page-5:page]
        return JsonResponse(k, safe=False)

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