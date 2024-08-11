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


class Location(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, unique=True)

    class Meta:
        verbose_name = "Location"
        verbose_name_plural = "Locations"

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


class Timing(models.Model):
    id = models.AutoField(primary_key=True)
    time = models.CharField(max_length=50)
    seat = models.ManyToManyField("Seats", related_name="timings")

    class Meta:
        verbose_name = "Timing"
        verbose_name_plural = "Timings"

    def __str__(self):
        return self.time


class Theatre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    time = models.ManyToManyField("Timing", related_name="theatres")
    seat = models.ManyToManyField("Seats", related_name="theatres")

    class Meta:
        verbose_name = "Theatre"
        verbose_name_plural = "Theatres"

    def __str__(self):
        return self.name


class Seats(models.Model):
    id = models.AutoField(primary_key=True)
    seat = models.CharField(max_length=50)

    def __str__(self):
        return self.seat


class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    movie_genre = models.ManyToManyField("Genre", related_name="genres_movies")
    location = models.ManyToManyField("Location", related_name="locations_movies")
    movie_language = models.ManyToManyField("Language", related_name="languages_movies")
    movie_rating = models.ManyToManyField("Rating", related_name="ratings_movies")
    image = models.TextField()
    star_rating = models.ManyToManyField(
        "StarRating", related_name="star_ratings_movies"
    )
    theatre = models.ManyToManyField("Theatre", related_name="theatres_movies")
    release_date = models.DateField(auto_now_add=True)
    time_length = models.CharField(max_length=100, default="2 hrs 50 mins")
    visibility_status = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Movie"
        verbose_name_plural = "Movies"

    def __str__(self):
        return self.title
