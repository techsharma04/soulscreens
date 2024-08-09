# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('cities/', views.get_cities, name='get_cities'),
    path('movies/', views.get_movies, name='get_movies'),
    path('rating/', views.get_rating, name='get_rating'),
    path('movies/<int:id>/', views.get_movie_details, name='get_movie_details'),
    # path('users/', views.UserCreateView.as_view(), name='user-create'),
    # path('users/<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),
    # path('movies/',views. MovieListView.as_view(), name='movie-list'),
    # path('movies/<int:pk>/', views.MovieDetailView.as_view(), name='movie-detail'),
    # path('seats/', views.SeatListView.as_view(), name='seat-list'),
    # path('seats/<int:pk>/', views.SeatDetailView.as_view(), name='seat-detail'),
    # path('tickets/', views.TicketListView.as_view(), name='ticket-list'),
    # path('bookings/', views.BookingListView.as_view(), name='booking-list'),
    
    
]
