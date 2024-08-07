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
    city_name = models.CharField(max_length=100)

    def __str__(self):
        return self.city_name

class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    director = models.CharField(max_length=200)
    starring_actors = models.ManyToManyField('Actor', related_name='movies')
    runtime = models.PositiveIntegerField() 
    genre = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    rating = models.FloatField() 

    def __str__(self):
        return self.title
    
class Actor(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name