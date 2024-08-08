from djongo import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True, max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class City(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    movie_genre = models.ManyToManyField("Genre", related_name="movies")
    movie_language = models.ManyToManyField("Language", related_name="movies")
    movie_rating = models.ManyToManyField("Rating", related_name="movies")
    image = models.CharField(max_length=100)
    star_rating = models.ManyToManyField("StarRating", related_name="movies")
    release_date = models.DateField(default='2000-01-01') 
    time_length = models.CharField(max_length=100, default='2 hrs 50 mins')
    visibility_status = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Language(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Genre(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Rating(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class StarRating(models.Model):
    star = models.CharField(max_length=200)

    def __str__(self):
        return self.star
