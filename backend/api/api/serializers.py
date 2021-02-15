from rest_framework import serializers
from .models import Activity, User



class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "title", "created", "description", "date", "owner"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ["id", "username", "isOrganization", "activitiesLog", "password"]
