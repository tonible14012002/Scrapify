# Generated by Django 4.1.7 on 2023-04-05 05:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('matching', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eventimage',
            name='name',
        ),
    ]
