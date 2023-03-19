from django.shortcuts import render
from rest_framework.viewsets import ViewSet
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView, 
    RetrieveAPIView, 
    ListAPIView
)
from django.contrib.auth import get_user_model
from account.serializers import (
    MyUserSerializer,
    MyUserRegisterSerializer
)

MyUser = get_user_model()

# Create your views here.

class MyUserViewSet(ViewSet,
                    ListAPIView,
                    CreateAPIView):
    queryset = MyUser.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return MyUserRegisterSerializer
        return MyUserSerializer
