from rest_framework import serializers
from .models import Activity, UserProfile
from django.contrib.auth.models import User
from rest_framework_jwt.settings import api_settings


class UserSerializer(serializers.ModelSerializer):
    class Meta:

        model = User
        fields = ["id", "username", "email"]


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ["id", "user", "is_organization"]


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)
    is_organization = serializers.BooleanField(default=False)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        is_organization = validated_data.pop("is_organization")
        password = validated_data.pop("password", None)
        instance = User.objects.create(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        UserProfile.objects.create(user=instance, is_organization=is_organization)
        return instance

    class Meta:
        model = User
        fields = ("token", "username", "email", "password", "is_organization")


class ActivitySerializer(serializers.ModelSerializer):
    author = UserProfileSerializer()

    class Meta:
        model = Activity
        fields = ["id", "title", "created", "description", "date", "author"]