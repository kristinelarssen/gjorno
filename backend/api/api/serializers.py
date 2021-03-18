from django.contrib.auth.models import User
from django.db.models import fields
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

from .models import Activity, UserProfile


class CustomRelatedField(serializers.PrimaryKeyRelatedField):
    def __init__(self, **kwargs):
        self.serializer = kwargs.pop("serializer", None)
        if self.serializer is not None and not issubclass(
            self.serializer, serializers.Serializer
        ):
            raise TypeError('"serializer" is not a valid serializer class')

        super().__init__(**kwargs)

    def use_pk_only_optimization(self):
        return False if self.serializer else True

    def to_representation(self, instance):
        if self.serializer:
            return self.serializer(instance, context=self.context).data
        return super().to_representation(instance)


class UserSerializer(serializers.ModelSerializer):
    class Meta:

        model = User
        fields = ["id", "username", "email"]


class UserProfileSerializer(serializers.ModelSerializer):
    user = CustomRelatedField(queryset=User.objects.all(), serializer=UserSerializer)

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

    author = CustomRelatedField(
        queryset=UserProfile.objects.all(), serializer=UserProfileSerializer
    )

    class Meta:
        model = Activity
        fields = ["title", "created", "description", "date", "author", "genre"]
