from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request, "index_project.html")

def living_room(request):
    return HttpResponse("This is living room")