from django.db import models


class Activity(models.Model):
    title = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField(default="")
    date = models.DateTimeField()
