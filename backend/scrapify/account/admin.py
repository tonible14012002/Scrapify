from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.admin import StackedInline
from django.contrib.auth import get_user_model
from account.models import DonorProfile, RecipientProfile

MyUser = get_user_model()
# Register your models here.


@admin.register(MyUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_superuser', 'is_active', 'first_name', 'last_name', 'is_recipient')
    list_filter = ('email', 'is_staff', 'is_active',)

    def has_add_permission(self, request):
        return False

@admin.register(DonorProfile)
class DonorProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'points')

    def has_add_permission(self, request):
        return False

@admin.register(RecipientProfile)
class recipientProfile(admin.ModelAdmin):
    list_display = ('organization_name', 'founder', 'founded_date')

    def has_add_permission(self, request):
        return False