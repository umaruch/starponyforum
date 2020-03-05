from django.shortcuts import render

# Create your views here.
def themesList(request):
    return render(
        request,
        'themes.html'
    )