from rest_framework import serializers
from .models import User, City, Movie, Language, Genre, Rating, StarRating

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'


class StarRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = StarRating
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):
    movie_genre = GenreSerializer(many=True, read_only=True)
    movie_language = LanguageSerializer(many=True, read_only=True)
    movie_rating = RatingSerializer(many=True, read_only=True)
    star_rating = StarRatingSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'


# class SeatSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Seat
#         fields = '__all__'

# class TicketSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Ticket
#         fields = '__all__'

# class BookingSerializer(serializers.ModelSerializer):
#     tickets = TicketSerializer(many=True)

#     class Meta:
#         model = Booking
#         fields = '__all__'
