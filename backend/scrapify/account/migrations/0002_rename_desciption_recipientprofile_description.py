# Generated by Django 4.1.7 on 2023-04-05 04:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipientprofile',
            old_name='desciption',
            new_name='description',
        ),
    ]
