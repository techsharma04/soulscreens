# Generated by Django 4.1.13 on 2024-08-14 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking_app', '0020_remove_theatre_cinemas_theatre_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='seats',
            name='status',
            field=models.CharField(default='vacant', max_length=100),
        ),
    ]
