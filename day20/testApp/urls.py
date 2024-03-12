from django.urls import path 
from . import views

urlpatterns = [
    path("", views.index, name='Index'),
    path("home/", views.home, name='Home'),
    path("home/kevin", views.kevin, name='Kevin'),
    path("home/nilesh", views.nilesh, name='Nilesh'),
    path("home/<str:fname>", views.come, name='Come')
]