from django.db import models
from django.conf import settings
from account.models import DonorProfile, RecipientProfile
# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

class Item(models.Model):

    name = models.CharField(max_length=100)
    weight = models.DecimalField(max_digits=10, decimal_places=3)
    count = models.IntegerField(default=1, null=False)
    description = models.TextField(null=False)

    donor_profile = models.ForeignKey(DonorProfile,
                              on_delete=models.CASCADE,
                              related_name='items',
                              null=False)
    categories = models.ManyToManyField(Category, related_name='items')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def get_event_directory(instance, filename):
    return f'{instance.name}'

class ActiveEventManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(closed=False)

class Event(models.Model):
    name = models.CharField(max_length=100)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    closed = models.BooleanField(default=False)
    banner = models.ImageField(upload_to=get_event_directory, default='banner/default_banner.jpg')

    address = models.CharField(max_length=200)
    description = models.TextField()
    recipient_profile = models.ForeignKey(RecipientProfile,
                                          on_delete=models.CASCADE,
                                          related_name='events',
                                          null=False)
    categories = models.ManyToManyField(Category, related_name='events')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_active = ActiveEventManager()
    objects = models.Manager()

    def get_organization_name(self):
        return self.recipient_profile.organization_name
    
    def get_recipient_avatar(self):
        return self.recipient_profile.avatar.url

    def __str__(self):
        return self.name


class Matching(models.Model):

    STATUS_CHOICES = (
        ('UNCONFIRMED', 'Unconfirmed'),
        ('CONFIRMED', 'Confirmed'),
        ('FINISHED', 'Finished')
    )

    item = models.OneToOneField(Item,
                                 on_delete=models.CASCADE,
                                 related_name='matching')
    event = models.ForeignKey(Event,
                              on_delete=models.CASCADE,
                              related_name='matching')
    status = models.CharField(choices=STATUS_CHOICES,
                              max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at', '-created_at']
        
class Care(models.Model):
    recipient = models.ForeignKey(RecipientProfile, 
                                  on_delete=models.CASCADE,
                                  related_name='cares')
    items = models.ForeignKey(Item, 
                              on_delete=models.CASCADE, 
                              related_name='cares')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    