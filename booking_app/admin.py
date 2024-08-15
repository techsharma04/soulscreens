from django.contrib import admin
from .models import User, Movie, Language, Genre, Rating, StarRating, Theatre, Location, Timing, Seats, BookedSeats, Bookings

admin.site.register(User)
admin.site.register(Movie)
admin.site.register(Language)
admin.site.register(Genre)
admin.site.register(Rating)
admin.site.register(StarRating)
admin.site.register(Theatre)
admin.site.register(Location)
admin.site.register(Timing)
admin.site.register(Seats)
admin.site.register(Bookings)
admin.site.register(BookedSeats)
