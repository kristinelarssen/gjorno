from rest_framework import serializers
from .models import Activity
from django.contrib.auth.models import User
#from rest_framework.authtoken.views import Token


#from django.contrib.auth.models import User


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "title", "created", "description", "date"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields = [ 'id', 'username','email','password']
