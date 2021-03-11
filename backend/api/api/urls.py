from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, current_user, UserList, ActivityViewSet
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r"activities", ActivityViewSet)
router.register(r"userprofiles", UserProfileViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
    path("token-auth/", obtain_jwt_token),
    path("users/", UserList.as_view()),
    path("current_user/", current_user),
]
