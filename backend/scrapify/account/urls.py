from django.http import HttpResponse
from django.urls import path
from rest_framework import routers
from account.views import MyUserViewSet
from django.urls import include
from account import views
from account.token import MyTokenObtainPairView, MyTokenRefreshView

router = routers.DefaultRouter()
router.register('', MyUserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
    path('user-detail-from-refresh/', views.get_user_from_refresh),
    path('auth/token/', MyTokenObtainPairView.as_view()),
    path('auth/token/refresh/', MyTokenRefreshView.as_view())
]