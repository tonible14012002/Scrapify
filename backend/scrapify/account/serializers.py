from rest_framework import serializers
from django.contrib.auth import get_user_model
from account.models import DonorProfile, RecipientProfile
from django.contrib.auth.hashers import make_password

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
    """
    Read only Serializer for user account
    """
    recipient_profile = serializers.SerializerMethodField()
    donor_profile = serializers.SerializerMethodField()

    class Meta:
        model = MyUser
        fields = ['id', 'username', 'phone', 'email', 'address', 'is_staff', 'last_name', 'first_name',
                  'is_recipient', 'recipient_profile', 'donor_profile']
    
    def get_recipient_profile(self, user):
        if user.is_recipient and user.recipient_profile:
            serializer = RecipientProfileSerializer(user.recipient_profile)
            return serializer.data
        return None

    def get_donor_profile(self, user):
        if not user.is_recipient and user.donor_profile:
            serializer = DonorProfileSerializer(user.donor_profile)
            return serializer.data
        return None

class MyUserRegisterSerializer(serializers.ModelSerializer):

    recipient_profile = RecipientProfileSerializer(required=False)
    donor_profile = DonorProfileSerializer(required=False)

    class Meta:
        model = MyUser
        fields = ['id', 'username', 'password', 'email', 'first_name', 'last_name',
                  'is_recipient', 'phone', 'address', 'donor_profile', 'recipient_profile']
        extra_kwargs = {
            'password': {'write_only': True}
        }
        
    def validate_donor_profile(self, value):
        print(value)
        return value
    
    def validate(self, attrs):
        attrs.setdefault('is_recipient', False)
        attrs.setdefault('donor_profile', {
            'points': 0
        })

        is_recipient = attrs.get('is_recipient', None)

        if is_recipient and not attrs.get('recipient_profile'):
            raise serializers.ValidationError('Provide recipient information')

        return super().validate(attrs)
    
    def create(self, validated_data):

        donor_profile_data = validated_data.pop('donor_profile')
        recipient_profile_data = validated_data.pop('recipient_profile', None)
        raw_password = validated_data.pop('password', None)
        is_recipient = validated_data['is_recipient']

        if is_recipient:
            recipient_profile = RecipientProfile.objects.create(**recipient_profile_data)
            user = MyUser.objects.create(
                recipient_profile=recipient_profile,
                password=make_password(raw_password),
                **validated_data
            )

        else:
            donor_profile = DonorProfile.objects.create(**donor_profile_data)
            user = MyUser.objects.create(
                donor_profile=donor_profile,
                password=make_password(raw_password),
                **validated_data
            )

        return user