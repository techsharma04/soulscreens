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
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class SeatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seats
        fields = "__all__"


class TimingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Timing
        fields = "__all__"


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


class CinemaSerializer(serializers.ModelSerializer):
    # location = LocationSerializer(many=True, read_only=True)

    class Meta:
        model = Theatre
        fields = "__all__"


class LocationSerializer(serializers.ModelSerializer):
    cinemas = CinemaSerializer(many=True, read_only=True)

    class Meta:
        model = Location
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    language = LanguageSerializer(many=True, read_only=True)
    genre = GenreSerializer(many=True, read_only=True)
    rating = RatingSerializer(many=True, read_only=True)
    star_rating = StarRatingSerializer(many=True, read_only=True)
    timing = TimingSerializer(many=True, read_only=True)
    cinema = CinemaSerializer(many=True, read_only=True)
    seat = SeatingSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = "__all__"
