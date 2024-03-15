from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "website/index_day2.html")

def home(request):
    return render(request, "website/home_day2.html")


def checkout(request):
    return render(request, "website/checkout.html")