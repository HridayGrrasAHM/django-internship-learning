from django.urls import path 
from . import views 


urlpatterns = [
    path("", views.index, name='Index'),
    # path("<str:fname>", views.hello, name='hello'),
    path("names/<str:fname>", views.hello, name='Hello'),
    path("html/index", views.page, name='Page'),
    path("html/names/<str:fname>", views.custom, name='Custom'),
    path("html/home", views.home, name='Home')
]