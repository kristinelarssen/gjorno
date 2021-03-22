from django.contrib import admin
from django.contrib.auth.models import User
from .models import Activity, UserProfile

# Register your models here.
admin.site.register(Activity)
admin.site.register(UserProfile)
admin.site.register(User)
