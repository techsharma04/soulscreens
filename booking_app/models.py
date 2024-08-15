from djongo import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True, max_length=100)
    password = models.CharField(max_length=100)

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self):
        return self.name


class Location(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)
    movies = models.ManyToManyField("Movie", related_name="movies_locations")

    class Meta:
        verbose_name = "Location"
        verbose_name_plural = "Locations"

    def __str__(self):
        return self.name


class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    image = models.TextField()
    release_date = models.DateField(auto_now_add=True)
    time_length = models.CharField(max_length=100, default="2 hrs 50 mins")
    visibility_status = models.CharField(max_length=100)
    genre = models.ManyToManyField("Genre", related_name="movie_genre")
    language = models.ManyToManyField("Language", related_name="movie_language")
    rating = models.ManyToManyField("Rating", related_name="movie_rating")
    star_rating = models.ManyToManyField("StarRating", related_name="movie_star_rating")
    cinema = models.ManyToManyField("Theatre", related_name="movie_theatres")

    class Meta:
        verbose_name = "Movie"
        verbose_name_plural = "Movies"

    def __str__(self):
        return self.title


class Theatre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    timing = models.ManyToManyField("Timing", related_name="cinema_timings")
    cities = models.ManyToManyField("Location", related_name="cinema_locations")

    class Meta:
        verbose_name = "Theatre"
        verbose_name_plural = "Theatres"

    def __str__(self):
        return self.name


class Timing(models.Model):
    id = models.AutoField(primary_key=True)
    time = models.CharField(max_length=50)
    seats = models.ManyToManyField("Seats", related_name="movie_seat_timings")

    class Meta:
        verbose_name = "Timing"
        verbose_name_plural = "Timings"

    def __str__(self):
        return self.time


class Seats(models.Model):
    id = models.AutoField(primary_key=True)
    seat = models.CharField(max_length=50)
    price = models.CharField(max_length=50, default=300)
    status = models.CharField(max_length=100, default="vacant")

    def __str__(self):
        return self.seat


class Genre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)

    class Meta:
        verbose_name = "Genre"
        verbose_name_plural = "Genres"

    def __str__(self):
        return self.name


class Language(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)

    class Meta:
        verbose_name = "Language"
        verbose_name_plural = "Languages"

    def __str__(self):
        return self.name


class Rating(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)

    class Meta:
        verbose_name = "Rating"
        verbose_name_plural = "Ratings"

    def __str__(self):
        return self.name


class StarRating(models.Model):
    id = models.AutoField(primary_key=True)
    star = models.CharField(max_length=200, unique=True)

    class Meta:
        verbose_name = "Star Rating"
        verbose_name_plural = "Star Ratings"

    def __str__(self):
        return self.star


class Bookings(models.Model):
    bookingId = models.AutoField(primary_key=True)
    email = models.CharField(max_length=200, default="user")
    location = models.CharField(max_length=50)
    theatre = models.CharField(max_length=50)
    movie = models.CharField(max_length=200)
    language = models.CharField(max_length=50)
    date = models.CharField(max_length=100)
    time = models.CharField(max_length=50)
    seats = models.ManyToManyField("BookedSeats", related_name="booked_seats")
    amount_paid = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = "Booking"
        verbose_name_plural = "Bookings"
        
    def __str__(self):
        return str(self.bookingId)
    
class BookedSeats(models.Model):
    id = models.AutoField(primary_key=True)
    seat = models.CharField(max_length=50)
    price = models.CharField(max_length=50)
    
    class Meta:
        verbose_name = "BookedSeat"
        verbose_name_plural = "BookedSeats"
        
    def __str__(self):
        return self.seat
