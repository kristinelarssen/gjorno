from django.db import models
from django.contrib.auth.models import User


class Activity(models.Model):
    title = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField(default="")
    date = models.DateTimeField()
    owner = models.ForeignKey("UserProfile", related_name='activities', on_delete=models.CASCADE, blank=True,null=True)

class UserProfile(models.Model):
    user = models.OneToOneField(User, default=None, null=True, on_delete=models.CASCADE)
    age = models.IntegerField()

    """   
    @receiver(post_save, sender=User)
    def create_userprofile(sender,instance,created,**kwargs):
        if created:
            UserProfile.objects.create(user=instance)

    @receiver(post_save, sender=User) 
    def save_user_profile(sender, instance,**kwargs):
        instance.userprofile.save()"""