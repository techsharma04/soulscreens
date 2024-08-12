# Generated by Django 4.1.13 on 2024-08-11 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking_app', '0011_theatre_genre_theatre_language_theatre_rating_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='genre',
            field=models.ManyToManyField(related_name='movie_genre', to='booking_app.genre'),
        ),
        migrations.AddField(
            model_name='movie',
            name='language',
            field=models.ManyToManyField(related_name='movie_language', to='booking_app.language'),
        ),
        migrations.AddField(
            model_name='movie',
            name='rating',
            field=models.ManyToManyField(related_name='movie_rating', to='booking_app.rating'),
        ),
        migrations.AddField(
            model_name='movie',
            name='star_rating',
            field=models.ManyToManyField(related_name='movie_star_rating', to='booking_app.starrating'),
        ),
    ]
