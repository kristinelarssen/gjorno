from django.db import models
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=CASCADE)
    is_organization = models.BooleanField(default=False, blank=True, null=True)


class Activity(models.Model):
    title = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField(default="")
    date = models.DateTimeField()
    author = models.ForeignKey(UserProfile, on_delete=CASCADE, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Activities"

    def __str__(self):
        return self.title
