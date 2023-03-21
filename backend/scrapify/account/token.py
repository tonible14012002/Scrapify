from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from account.serializers import MyUserSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['user'] = MyUserSerializer(self.user).data
        return data

class MyTokenRefreshSerializer(TokenRefreshSerializer):
    pass
        # username_field_name = 
class MyTokenRefreshView(TokenRefreshView):
    serializer_class = MyTokenRefreshSerializer
        
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer