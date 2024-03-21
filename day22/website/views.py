from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Login
# Create your views here.
def index(request):
    # return HttpResponse("Hello world")
    return render(request, "index.html")

def redirect(request):
    print(request.POST)
    Login(fullName = request.POST['fullName'], age=request.POST['age']).save()
    # return HttpResponse("Your data has been stored")
    return HttpResponseRedirect(f"{request.POST['csrfmiddlewaretoken']}/home")


def home(request, token):
    # return HttpResponse("Welcome to Home")
    data = Login.objects.all()
    return render(request, "home.html", {
        "data":data
    })

def everyone(request, id):
    d = Login.objects.get(pk=id)
    img = f"{d.id}.png"
    print(img)
    return render(request, "user.html", {
        "img":img,
        "d":d
    })
