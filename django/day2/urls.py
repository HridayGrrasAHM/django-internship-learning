from django.urls import path 
from . import views 

urlpatterns = [
    path("", views.index, name='Index'),
    path("home/", views.home, name='Home'),
    path("checkout/", views.checkout, name='Checkout')
]