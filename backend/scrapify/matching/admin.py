from django.contrib import admin
from matching.models import Category, Item, Event, Matching

# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'weight', 'count', 'donor_profile', 'created_at', 'updated_at')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_time', 'end_time', 'address', 'recipient_profile')

@admin.register(Matching)
class MatchingAdmin(admin.ModelAdmin):
    list_display = ('status','item_name', 'donor_username', 'event', 'created_at', 'updated_at')

    def item_name(self, obj):
        return obj.item.name

    def donor_username(self, obj):
        return obj.item.donor_profile.get_username()


