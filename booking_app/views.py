from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.shortcuts import get_object_or_404, render
from django.utils.decorators import method_decorator
from django.views import View
from rest_framework import generics
import json
from .models import User, Movie, Rating, Theatre, Genre, Language, Location, Timing, Seats
from rest_framework.renderers import JSONRenderer
from .serializers import (
    UserSerializer,
    MovieSerializer,
    RatingSerializer,
    CinemaSerializer,
    GenreSerializer,
    LanguageSerializer,
    LocationSerializer,
    TimingSerializer,
    SeatingSerializer
)


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

def get_movies(request):
    movies = Movie.objects.all()
    movies_serializer = MovieSerializer(movies, many=True)
    return JsonResponse(movies_serializer.data, safe=False)


def get_movie_details(request, id):
    movie = Movie.objects.get(id=id)
    movie_serializer = MovieSerializer(movie)
    return JsonResponse(movie_serializer.data, safe=False)


def get_rating(request):
    rating = Rating.objects.all()
    rating_serializer = RatingSerializer(rating, many=True)
    return JsonResponse(rating_serializer.data, safe=False)


def get_cinema(request):
    cinema = Theatre.objects.all()
    cinema_serializer = CinemaSerializer(cinema, many=True)
    return JsonResponse(cinema_serializer.data, safe=False)

def get_cinema_details(request, id):
    theatre = Theatre.objects.get(id=id)
    cinema_serializer = CinemaSerializer(theatre)
    return JsonResponse(cinema_serializer.data, safe=False)

def get_timing(request, id):
    timing = Timing.objects.get(id=id)
    timing_serializer = TimingSerializer(timing, many=True)
    return JsonResponse(timing_serializer.data, safe=False)

def get_seating(request):
    timing = Seats.objects.all()
    timing_serializer = SeatingSerializer(timing, many=True)
    return JsonResponse(timing_serializer.data, safe=False)

def get_genre(request):
    genre = Genre.objects.all()
    genre_serializer = GenreSerializer(genre, many=True)
    return JsonResponse(genre_serializer.data, safe=False)

def get_location(request):
    location = Location.objects.all()
    location_serializer = LocationSerializer(location, many=True)
    return JsonResponse(location_serializer.data, safe=False)

def get_city(request, id):
    location = Location.objects.get(id=id)
    location_serializer = LocationSerializer(location)
    return JsonResponse(location_serializer.data, safe=False)

def get_language(request):
    language = Language.objects.all()
    language_serializer = LanguageSerializer(language, many=True)
    return JsonResponse(language_serializer.data, safe=False)