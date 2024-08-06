# serializers.py
from rest_framework import serializers
from .models import User, City

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'        

# class MovieSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Movie
#         fields = '__all__'

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
