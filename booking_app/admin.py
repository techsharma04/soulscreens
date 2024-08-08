from django.contrib import admin
from .models import User, City, Movie, Language, Genre, Rating, StarRating

admin.site.register(User)
admin.site.register(City)
admin.site.register(Movie)
admin.site.register(Language)
admin.site.register(Genre)
admin.site.register(Rating)
admin.site.register(StarRating)
