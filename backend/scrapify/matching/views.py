from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from rest_framework.viewsets import ViewSet
from matching.models import (
    Item,
    Event,
    Matching
)
from matching.serializers import (
    ItemSerializer,
    ItemDetailSerializer,
    EventSerializer,
    MatchingSerializer,
    MatchingDetailSerializer
)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
# Create your views here.

class ItemViewSet(ViewSet, 
                  ListAPIView, 
                  CreateAPIView, 
                  RetrieveAPIView,
                  UpdateAPIView,
                  DestroyAPIView):
    queryset = Item.objects.all()
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ItemDetailSerializer
        return ItemSerializer

class EventViewSet(ViewSet,
                   ListAPIView, 
                   CreateAPIView, 
                   RetrieveAPIView,
                   UpdateAPIView,
                   DestroyAPIView):
    
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['name', 'closed', 'id']
    search_fields = ['name', 'start_date',]

    def get_queryset(self):
        events = Event.objects.all()
        return events

    def get_serializer_class(self):
        return EventSerializer

class MatchingViewset(ViewSet, 
                      ListAPIView,CreateAPIView,
                      RetrieveAPIView,
                      UpdateAPIView,
                      DestroyAPIView):
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['status','event__id', 'event__recipient_profile__id']


    def get_queryset(self):
        return Matching.objects.all()

    def get_serializer_class(self):
        return MatchingDetailSerializer 