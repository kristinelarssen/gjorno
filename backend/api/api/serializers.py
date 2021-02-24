from rest_framework import serializers
from .models import Activity
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token




class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "title", "created", "description", "date"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields = [ 'id', 'username','password']
        extra_kwargs = {'password': {'write_only':True, 'required':True}}
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user