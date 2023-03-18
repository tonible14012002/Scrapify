from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.core.validators import RegexValidator

# Create your models here.
def get_user_directory_path(instance, filename):
    return f'{instance.id}'

class RecipientManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_recipient=True)

class DonorManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_recipient=False)

class RecipientProfile(models.Model):
    founded_date = models.DateField(null=False)
    organization_name= models.CharField(max_length=100, null=False)
    website_url = models.CharField(max_length=200, null=True)
    avatar = models.ImageField(upload_to='user/{instance.username}')
    founder = models.CharField(max_length=100, null=True)
    desciption = models.TextField(null=False)

class DonorProfile(models.Model):
    points = models.IntegerField(default=0)

class MyUser(AbstractUser):
    PHONE_REGEX_VALIDATOR = RegexValidator(regex='(84|0[3|5|7|8|9])+([0-9]{8})\b',
                                           message='Incorrect phone number formats')
    phone = models.CharField(validators=[PHONE_REGEX_VALIDATOR],
                            null=False, blank=False,
                            max_length=20)
    address = models.CharField(max_length=200,
                               null=True, blank=True)
    is_recipient = models.BooleanField(default=False)

    objects = UserManager()
    recipient = RecipientManager()
    donors = DonorManager()

    recipient_profile = models.OneToOneField(RecipientProfile,
                                            on_delete=models.CASCADE,
                                             null=True)
    donor_profile = models.OneToOneField(DonorProfile,
                                        on_delete=models.CASCADE,
                                         null=True)
    REQUIRED_FIELDS = []
