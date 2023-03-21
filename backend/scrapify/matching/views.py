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
    Matching,
    Category,
    Care
)
from matching.serializers import (
    ItemSerializer,
    ItemDetailSerializer,
    EventSerializer,
    MatchingSerializer,
    MatchingDetailSerializer,
    CategorySerializer,
    CareSerializer
)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from account.models import (
    RecipientProfile
)
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class Care(ViewSet,
           CreateAPIView,
           DestroyAPIView):
    
    queryset = Care.objects.all()
    serializer_class = CareSerializer
    permission_classes = [IsAuthenticated]

class ItemViewSet(ViewSet, 
                  ListAPIView, 
                  CreateAPIView, 
                  RetrieveAPIView,
                  UpdateAPIView,
                  DestroyAPIView):

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['donor_profile']
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        items = Item.objects.all()
        matched = self.request.query_params.get('matched', None)
        cared_by = self.request.query_params.get('cared_by', None)

        if cared_by is not None:
            items = items.filter(cares__recipient=cared_by)

        if matched is not None:
            items = items.filter(matching__isnull=matched=='false')
        return items

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
    
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['name', 'closed', 'recipient_profile']
    search_fields = ['name', 'start_date',]

    def get_queryset(self):
        events = Event.objects.all()
        return events

    def get_serializer_class(self):
        return EventSerializer

@api_view(['GET'])
def get_all_event_categories(request, profile_id):
    print(profile_id)
    categories = Category.objects\
        .filter(events__recipient_profile__id=profile_id)\
        .distinct()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

class MatchingViewset(ViewSet, 
                      ListAPIView,CreateAPIView,
                      RetrieveAPIView,
                      UpdateAPIView,
                      DestroyAPIView):
    
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['status','event__id', 'event__recipient_profile' ,'item__donor_profile']


    def get_queryset(self):
        return Matching.objects.all()

    def get_serializer_class(self):
        return MatchingDetailSerializer 