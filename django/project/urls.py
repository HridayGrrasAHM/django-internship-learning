from django.urls import path 
from . import views 

urlpatterns = [
    path("", views.index, name='index_project'),
    path("living_room", views.living_room, name='Living_room_project')
]