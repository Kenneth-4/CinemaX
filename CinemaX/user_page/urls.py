from django.urls import path
from . import views

urlpatterns = [
    path("", views.movie_list, name="movie_list"),
    path("screening/<int:screening_id>/", views.screening_detail, name="screening_detail"),
    path("screening/<int:screening_id>/book/", views.create_booking, name="create_booking"),
    path("booking/<int:booking_id>/success/", views.booking_success, name="booking_success"),
]


