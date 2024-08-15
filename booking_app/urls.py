# urls.py

from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'), 
    path('login/', views.login, name='login'),
    path('profile/<int:id>', views.get_profile, name='get_profile'),
    path('retrieve-password/<str:email>', views.get_user, name='get_user'),
    path('user/update/<str:email>', views.update_user, name='update_user'),
    path('cities/', views.get_location, name='get_location'),
    path('cities/<int:id>', views.get_city, name='get_city'),
    path('movies/', views.get_movies, name='get_movies'),
    path('rating/', views.get_rating, name='get_rating'),
    path('cinemas/', views.get_cinema, name='get_cinema'),
    path('cinemas/<int:id>/', views.get_cinema_details, name='get_cinema_details'),
    path('movies/<int:id>/timing/', views.get_timing, name='get_timing'),
    path('genre/', views.get_genre, name='get_genre'),
    path('language/', views.get_language, name='get_language'),
    path('movies/<int:id>/', views.get_movie_details, name='get_movie_details'),
    path('city/<int:ctid>/cinemas/<int:cid>/movies/<int:mid>/timing/<int:tid>/language/<int:lid>/seatselection/<str:did>', views.get_seating, name='get_seating'),
    path('confirm-booking/', views.confirm_booking, name='confirm-booking'),
    path('booking/', views.get_bookings, name='get-bookings'),
    path('booking/<int:id>/', views.get_booking, name='get-booking')
    
]
