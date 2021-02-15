from rest_framework import viewsets
from rest_framework import permissions
from .models import Activity
from django.contrib.auth.models import User
from .serializers import ActivitySerializer
from .serializers import UserSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permissions = [permissions.IsAuthenticatedOrReadOnly]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permissions = [permissions.IsAuthenticatedOrReadOnly]

