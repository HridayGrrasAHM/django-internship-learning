from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Hello day1")

def hello(request, fname):
    return HttpResponse(f"Hello {fname}")

def page(request):
    return render(request, "website/index.html")

def custom(request, fname):
    return render(request, "website/index.html", {
        "name":fname
    })

def home(request):
    return render(request, 'website/home.html')