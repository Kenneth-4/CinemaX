from django.db import models
from django.utils import timezone


class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    duration_minutes = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title


class Screening(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="screenings")
    start_time = models.DateTimeField()
    hall_name = models.CharField(max_length=100)
    total_seats = models.PositiveIntegerField(default=100)

    class Meta:
        ordering = ["start_time"]

    def __str__(self) -> str:
        return f"{self.movie.title} @ {self.start_time:%Y-%m-%d %H:%M}"

    @property
    def available_seats(self) -> int:
        booked = self.bookings.aggregate(models.Sum("num_seats")).get("num_seats__sum") or 0
        return max(self.total_seats - booked, 0)


class Booking(models.Model):
    screening = models.ForeignKey(Screening, on_delete=models.CASCADE, related_name="bookings")
    name = models.CharField(max_length=120)
    email = models.EmailField()
    num_seats = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.name} - {self.screening} x{self.num_seats}"

    def clean(self) -> None:
        # Prevent booking in the past or exceeding availability
        if self.screening.start_time < timezone.now():
            raise models.ValidationError("Cannot book a past screening.")
        if self.pk is None:
            # New booking
            if self.num_seats > self.screening.available_seats:
                raise models.ValidationError("Not enough seats available.")
        else:
            # On updates, compute delta
            original = Booking.objects.get(pk=self.pk)
            delta = self.num_seats - original.num_seats
            if delta > self.screening.available_seats:
                raise models.ValidationError("Not enough seats available for the update.")
