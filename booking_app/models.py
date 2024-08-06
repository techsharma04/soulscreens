from djongo import models
from django.db import models
from django.db import models


class User(models.Model):
    id= models.IntegerField
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True, max_length=100)
    password=models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class City(models.Model):
    city_name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# class Movie(models.Model):
#     title = models.CharField(max_length=255)
#     director = models.CharField(max_length=255)
#     starring_actors = models.TextField()
#     runtime = models.IntegerField()
#     genre = models.CharField(max_length=100)
#     language = models.CharField(max_length=100)
#     rating = models.CharField(max_length=10)

#     def __str__(self):
#         return self.title


# class Seat(models.Model):
#     seat_number = models.CharField(max_length=10)
#     is_available = models.BooleanField(default=True)
#     seat_type = models.CharField(
#         max_length=50, choices=[("Regular", "Regular"), ("Premium", "Premium")]
#     )

#     def __str__(self):
#         return self.seat_number


# class Ticket(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
#     seat = models.ForeignKey(Seat, on_delete=models.CASCADE)
#     screening_time = models.DateTimeField()

#     def __str__(self):
#         return f"{self.user} - {self.movie.title} - {self.seat.seat_number}"


# class Booking(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     tickets = models.ManyToManyField(Ticket)
#     total_cost = models.DecimalField(max_digits=10, decimal_places=2)
#     booking_time = models.DateTimeField(auto_now_add=True)
#     is_confirmed = models.BooleanField(default=False)

#     def __str__(self):
#         return f"Booking {self.id} by {self.user.username}"
