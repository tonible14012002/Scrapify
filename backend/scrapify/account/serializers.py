from rest_framework import serializers
from django.contrib.auth import get_user_model
from account.models import DonorProfile, RecipientProfile

MyUser = get_user_model()

class DonorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonorProfile
        fields = '__all__'

class RecipientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipientProfile
        fields = '__all__'

class MyUserSerializer(serializers.ModelSerializer):
    recipient_profile = serializers.SerializerMethodField()
    donor_profile = serializers.SerializerMethodField()

    class Meta:
        model = MyUser
        fields = ['username', 'phone', 'email', 'address', 'is_recipient',
                  'recipient_profile', 'donor_profile']
    
    def get_recipient_profile(self, user):
        if user.is_recipient and user.recipient_profile:
            serializer = RecipientProfileSerializer(user)
            return serializer.data
        return None

    def get_donor_profile(self, user):
        if not user.is_recipient and user.donor_profile:
            serializer = DonorProfileSerializer(user)
            return serializer.data
        return None

