from django.http import HttpResponse
from django.urls import path
from rest_framework import routers
from account.views import MyUserViewSet

router = routers.DefaultRouter()
router.register('', MyUserViewSet, basename='user')


urlpatterns = router.urls