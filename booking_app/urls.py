from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add-booking/', views.add_booking, name='add_booking'),
    path('login/', views.login, name='login'),
]
