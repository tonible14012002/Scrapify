
from django.http import HttpResponse
from django.urls import path
from rest_framework import routers
from matching.views import (
    ItemViewSet,
    EventViewSet,
    MatchingViewset
)

router = routers.DefaultRouter()

router.register('items', ItemViewSet, basename='item')
router.register('events', EventViewSet, basename='event')
router.register('matching', MatchingViewset, basename='matching')

urlpatterns = router.urls