from rest_framework import serializers
from .models import (
    User,
    Movie,
    Language,
    Genre,
    Rating,
    StarRating,
    Theatre,
    Location,
    Timing,
    Seats,
    BookedSeats,
    Bookings,
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class ForgotUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email"]


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "password"]  # Include fields that you want to update
        extra_kwargs = {
            "email": {"required": True},
            "password": {"required": True},
        }


class LanguageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Language
        fields = "__all__"


class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = "__all__"


class RatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rating
        fields = "__all__"


class StarRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = StarRating
        fields = "__all__"


class SeatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Seats
        fields = "__all__"


class TimingSerializer(serializers.ModelSerializer):
    seats = SeatingSerializer(many=True, read_only=True)

    class Meta:
        model = Timing
        fields = "__all__"


class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = ["id", "name"]


class CinemaSerializer(serializers.ModelSerializer):
    timing = TimingSerializer(many=True, read_only=True)
    cities = CitySerializer(many=True, read_only=True)

    class Meta:
        model = Theatre
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    language = LanguageSerializer(many=True, read_only=True)
    genre = GenreSerializer(many=True, read_only=True)
    rating = RatingSerializer(many=True, read_only=True)
    star_rating = StarRatingSerializer(many=True, read_only=True)
    timing = TimingSerializer(many=True, read_only=True)
    cinema = CinemaSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = "__all__"


class LocationSerializer(serializers.ModelSerializer):
    movies = MovieSerializer(many=True, read_only=True)

    class Meta:
        model = Location
        fields = "__all__"


class BookedSeatsSerializer(serializers.ModelSerializer):

    class Meta:
        model = BookedSeats
        fields = "__all__"


class BookingSerializer(serializers.ModelSerializer):
    seats = BookedSeatsSerializer(many=True)

    class Meta:
        model = Bookings
        fields = "__all__"

    def create(self, validated_data):
        seats_data = validated_data.pop("seats")
        booking = Bookings.objects.create(**validated_data)
        for seat_data in seats_data:
            booked_seat = BookedSeats.objects.create(**seat_data)
            booking.seats.add(booked_seat)
        return booking
