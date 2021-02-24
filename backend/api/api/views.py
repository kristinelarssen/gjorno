from rest_framework import viewsets
from rest_framework import permissions
from .models import Activity
from .serializers import ActivitySerializer,UserSerializer
from django.contrib.auth.models import User


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permissions = [permissions.IsAuthenticatedOrReadOnly]
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permissions = [permissions.IsAuthenticatedOrReadOnly]