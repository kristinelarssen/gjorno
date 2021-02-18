from rest_framework import serializers
from .models import Activity, UserProfile
from django.contrib.auth.models import User


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "title", "created", "description", "date",'owner']

class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    activities = serializers.HyperlinkedRelatedField(many=True, view_name='activity-detail', read_only=True)

class UserSerializer(serializers.HyperlinkedModelSerializer):  
    user_profile_details= UserProfileSerializer(many=True)
    class Meta:
        model=User
        fields = ('id','username','password','user_profile_details')