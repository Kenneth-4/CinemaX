from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.http import HttpRequest, HttpResponse
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ValidationError
from .models import Movie, Screening, Booking


def movie_list(request: HttpRequest) -> HttpResponse:
    movies = Movie.objects.all().order_by("title")
    return render(request, "user_page/movie_list.html", {"movies": movies})


def screening_detail(request: HttpRequest, screening_id: int) -> HttpResponse:
    screening = get_object_or_404(Screening, pk=screening_id)
    return render(request, "user_page/screening_detail.html", {"screening": screening})


@require_http_methods(["POST"])
def create_booking(request: HttpRequest, screening_id: int) -> HttpResponse:
    screening = get_object_or_404(Screening, pk=screening_id)
    name = request.POST.get("name", "").strip()
    email = request.POST.get("email", "").strip()
    try:
        num_seats = int(request.POST.get("num_seats", "0"))
    except ValueError:
        num_seats = 0

    booking = Booking(screening=screening, name=name, email=email, num_seats=num_seats)
    try:
        booking.full_clean()
        booking.save()
    except ValidationError as e:
        return render(
            request,
            "user_page/screening_detail.html",
            {"screening": screening, "errors": e.message_dict or {"__all__": e.messages}},
            status=400,
        )

    return redirect(reverse("booking_success", args=[booking.id]))


def booking_success(request: HttpRequest, booking_id: int) -> HttpResponse:
    booking = get_object_or_404(Booking, pk=booking_id)
    return render(request, "user_page/booking_success.html", {"booking": booking})
