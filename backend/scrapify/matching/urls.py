
from django.http import HttpResponse
from django.urls import include, path
from rest_framework import routers
from matching.views import (
    ItemViewSet,
    EventViewSet,
    MatchingViewset
)
from matching import views

router = routers.DefaultRouter()

router.register('items', ItemViewSet, basename='item')
router.register('events', EventViewSet, basename='event')
router.register('matching', MatchingViewset, basename='matching')

urlpatterns = [
    path('', include(router.urls)),
    path('categories-of/<int:profile_id>/', views.get_all_event_categories),

]