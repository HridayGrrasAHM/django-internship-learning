from django.urls import path 
from . import views

urlpatterns = [
    path("", views.index, name='Index'),
    path("redirect", views.redirect, name='Redirect'),
    path("<str:token>/home", views.home, name='Home'),
    path("home/<int:id>", views.everyone, name='Everyone')
]