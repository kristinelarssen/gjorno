from django.db import models
from djangotoolbox.fields import ListField 


class User(models.Model):
    username = models.CharField(max_length=50)
    isOrganization = models.BooleanField()
    activitiesLog = ListField(models.ForeignKey(Activity))
    password= models.CharField(max_length=20)

class Activity(models.Model):
    title = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField(default="")
    date = models.DateTimeField()
    owner = models.ForeignKey(User, on_delete=models.SET_NULL)






