# Generated by Django 4.1.7 on 2023-03-18 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matching', '0004_event'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='closed',
            field=models.BooleanField(default=False),
        ),
    ]