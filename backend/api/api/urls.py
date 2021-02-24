from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.contrib import admin
from rest_framework.authtoken.views import obtain_auth_token

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r"activities", views.ActivityViewSet)
router.register(r"users", views.UserViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [path("", include(router.urls)), path("admin/", admin.site.urls),path("auth/",obtain_auth_token)]

