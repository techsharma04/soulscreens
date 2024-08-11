# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('cities/', views.get_location, name='get_location'),
    path('movies/', views.get_movies, name='get_movies'),
    path('rating/', views.get_rating, name='get_rating'),
    path('cinemas/', views.get_cinema, name='get_cinema'),
    path('timing/', views.get_timing, name='get_timing'),
    path('genre/', views.get_genre, name='get_genre'),
    path('language/', views.get_language, name='get_language'),
    path('movies/<int:id>/', views.get_movie_details, name='get_movie_details'),
    path('seatselection/', views.get_seating, name='get_seating'),

]
