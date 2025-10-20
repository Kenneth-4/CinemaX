from django.contrib import admin
from .models import Movie, Screening, Booking


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ("title", "duration_minutes", "created_at")
    search_fields = ("title",)


@admin.register(Screening)
class ScreeningAdmin(admin.ModelAdmin):
    list_display = ("movie", "start_time", "hall_name", "total_seats")
    list_filter = ("movie", "hall_name")
    date_hierarchy = "start_time"


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("screening", "name", "email", "num_seats", "created_at")
    list_filter = ("screening",)
    search_fields = ("name", "email")
