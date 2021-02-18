from rest_framework import viewsets
from rest_framework import permissions
from .models import Activity, UserProfile
from .serializers import ActivitySerializer, UserSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permissions = [permissions.IsAuthenticatedOrReadOnly]

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
    permissions = [permissions.IsAuthenticatedOrReadOnly]