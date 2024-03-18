from django.db import models

# Create your models here.
class Login(models.Model):
    fullName = models.CharField(max_length = 120)
    age = models.IntegerField()