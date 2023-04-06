from rest_framework import serializers
from matching.models import Event, Item, Category, Matching, Care, EventImage
from account.serializers import DonorProfileSerializer, MyUserSerializer
import json


# Basic
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class EventImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventImage
        fields = ['id', 'image', 'created_at']
    
# Custom
class ItemSerializer(serializers.ModelSerializer):

    donor_username = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = ['id', 'name', 'weight', 'count', 'categories', 'description',
                  'created_at', 'updated_at', 'donor_profile', 'donor_username']
    
    def validate(self, attrs):
        print(attrs)
        return super().validate(attrs)
    
    def get_donor_username(self, obj):
        return obj.donor_profile.get_username()

    def to_representation(self, instance):
        data =  super().to_representation(instance)
        category_ids = data.pop('categories')
        categories = Category.objects.filter(id__in=category_ids)
        serializers = CategorySerializer(categories, many=True)
        data['categories'] = serializers.data
        return data
    

class EventSerializer(serializers.ModelSerializer):

    images = EventImageSerializer(many=True)

    class Meta:
        model = Event
        fields = ['id', 'name', 'closed', 'start_time', 'end_time', 'images',
                  'categories', 'address', 'created_at', 'updated_at', 'recipient_profile', 'description']
    
    def get_fields(self):
        fields = super().get_fields()
        user = self.context['request'].user

        if (user.is_authenticated and not user.is_staff
            and user.is_recipient):
            # Exclude known field
            self.fields.pop('recipient_profile')
            # ...
        return fields

    def create(self, validated_data):
        print(validated_data)
        images = validated_data.pop('images', None)
        event = super().create(**validated_data)
        for image in images:
            EventImage.objects.create(event=event, **image)
        return event
    
    def to_representation(self, instance):
        data =  super().to_representation(instance)
        category_ids = data.pop('categories')
        categories = Category.objects.filter(id__in=category_ids)
        serializers = CategorySerializer(categories, many=True)
        data['categories'] = serializers.data

        return data
    

class MatchingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matching
        fields = ['id', 'item', 'event','status', 'created_at', 'updated_at']

class MatchingDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Matching
        fields = ['id', 'item', 'event','status', 'created_at', 'updated_at']
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        print(data)
        item_id = data.pop('item')
        event_id = data.pop('event')

        data['item'] = ItemSerializer(
            Item.objects.get(id=item_id),
            context=self.context
        ).data
        data['event'] = EventSerializer(
            Event.objects.get(id=event_id),
            context=self.context
        ).data

        return data

    
class CareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Care
        fields = ['recipient', 'item', 'created_at', 'updated_at']
        extra_kwargs = {
            'created_at': {'read_only': True}, 
            'updated_at': {'read_only': False}
        }
    
    def create(self, validated_data):
        care = Care.objects.filter(
            recipient__id=validated_data['recipient'],
            item__id=validated_data['item']
        )

        if care.exists():
            return care.first()
        else:
            super().create(validated_data)