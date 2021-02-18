from rest_framework import serializers
from .models import Activity, UserProfile


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ["id", "title", "created", "description", "date"]

class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    #activities = serializers.HyperlinkedRelatedField(many=True, view_name='activity-detail', read_only=True)
    class Meta:
        model = UserProfile
        fields = ['url', 'id', 'username', 'age']