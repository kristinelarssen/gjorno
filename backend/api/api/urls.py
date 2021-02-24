from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.contrib import admin

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r"activities", views.ActivityViewSet)
router.register(r'users', views.UserViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [path("", include(router.urls)),
path("admin/", admin.site.urls)]
