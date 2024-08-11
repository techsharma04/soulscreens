# Generated by Django 4.1.13 on 2024-08-11 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking_app', '0002_remove_movie_theatre_delete_theatre_delete_timing'),
    ]

    operations = [
        migrations.CreateModel(
            name='Seats',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('seat', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Timing',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('time', models.CharField(max_length=50)),
                ('seat', models.ManyToManyField(related_name='timings', to='booking_app.seats')),
            ],
            options={
                'verbose_name': 'Timing',
                'verbose_name_plural': 'Timings',
            },
        ),
        migrations.CreateModel(
            name='Theatre',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('seat', models.ManyToManyField(related_name='theatres', to='booking_app.seats')),
                ('time', models.ManyToManyField(related_name='theatres', to='booking_app.timing')),
            ],
            options={
                'verbose_name': 'Theatre',
                'verbose_name_plural': 'Theatres',
            },
        ),
        migrations.AddField(
            model_name='movie',
            name='theatre',
            field=models.ManyToManyField(related_name='theatres_movies', to='booking_app.theatre'),
        ),
    ]
