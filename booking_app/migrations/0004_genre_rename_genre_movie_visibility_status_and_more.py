# Generated by Django 4.1.13 on 2024-08-08 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking_app', '0003_remove_movie_starring_actors_delete_actor'),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.RenameField(
            model_name='movie',
            old_name='genre',
            new_name='visibility_status',
        ),
        migrations.RemoveField(
            model_name='movie',
            name='runtime',
        ),
        migrations.AddField(
            model_name='movie',
            name='movie_genre',
            field=models.ManyToManyField(related_name='movies', to='booking_app.genre'),
        ),
    ]
