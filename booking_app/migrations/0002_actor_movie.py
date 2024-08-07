# Generated by Django 4.1.13 on 2024-08-07 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=200)),
                ('director', models.CharField(max_length=200)),
                ('runtime', models.PositiveIntegerField()),
                ('genre', models.CharField(max_length=100)),
                ('language', models.CharField(max_length=100)),
                ('rating', models.FloatField()),
                ('starring_actors', models.ManyToManyField(related_name='movies', to='booking_app.actor')),
            ],
        ),
    ]
