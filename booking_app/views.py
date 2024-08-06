from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
import json
from .models import User, City
from rest_framework import generics, permissions
from rest_framework.renderers import JSONRenderer
from .serializers import UserSerializer, CitySerializer


@csrf_exempt
@require_POST
def signup(request):
    try:
        data = json.loads(request.body)
        name = data.get("name")
        email = data.get("email")
        password = data.get("password")

        if email and password:
            if User.objects.filter(email=email).exists():
                return JsonResponse({"error": "Email already exists"}, status=400)
            user = User(name=name, email=email, password=password)
            user.save()
            return JsonResponse(
                {"message": "Sign up successful. redirecting..."}, status=201
            )
        else:
            return JsonResponse({"error": "Invalid data"}, status=400)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@require_POST
def login(request):
    try:
        data = json.loads(request.body)
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return JsonResponse(
                {"error": "Email and password are required"}, status=400
            )

        user = User.objects.filter(email=email, password=password).first()

        if user:
            return JsonResponse(
                {
                    "message": "Login successful. redirecting...",
                    "user": {"name": user.name},
                },
                status=200,
            )
        else:
            return JsonResponse({"error": "Invalid email or password"}, status=401)

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def index(request):
    return render(request, "index.html")


def get_cities(request):
    cities = City.objects.all()
    city_serializer = CitySerializer(cities, many=True)
    return JsonResponse(city_serializer.data, safe=False)


# class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class MovieListView(generics.ListCreateAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer

# class MovieDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer

# class SeatListView(generics.ListCreateAPIView):
#     queryset = Seat.objects.all()
#     serializer_class = SeatSerializer

# class SeatDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Seat.objects.all()
#     serializer_class = SeatSerializer

# class TicketListView(generics.ListCreateAPIView):
#     queryset = Ticket.objects.all()
#     serializer_class = TicketSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class BookingListView(generics.ListCreateAPIView):
#     queryset = Booking.objects.all()
#     serializer_class = BookingSerializer
#     permission_classes = [permissions.IsAuthenticated]
