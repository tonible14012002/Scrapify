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

from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
import jwt

MyUser = get_user_model()

# Create your views here.

class MyUserViewSet(ViewSet,
                    ListAPIView,
                    CreateAPIView):
    queryset = MyUser.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'create':
            return MyUserRegisterSerializer
        return MyUserSerializer


@api_view(['POST'])
def get_user_from_refresh(request):
    refresh = request.data.get('refresh', None)

    if refresh:
        try:
            payload = jwt.decode(refresh, settings.SECRET_KEY, 'HS256')
            uid = payload['user_id']
            user = get_object_or_404(MyUser, id=uid)
            return Response(MyUserSerializer(user).data)
        except KeyError as a:
            return Response({'detail': 'Incorrect token'}, status=status.HTTP_400_BAD_REQUEST)
        except (jwt.DecodeError, jwt.ExpiredSignatureError) as e:
            return Response({'detail': 'Token may be expired or incorrect'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'detail': 'refresh token is required in body'}, status=status.HTTP_400_BAD_REQUEST)