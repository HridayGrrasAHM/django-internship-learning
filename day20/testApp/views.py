from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Hello world from Test")

def home(request):
    return HttpResponse("Hello Home")

def kevin(request):
    return HttpResponse("Kevin Come home")

def nilesh(request):
    return HttpResponse("Nilesh Come home")

def come(request, fname):
    return HttpResponse(f"{fname} Come home")