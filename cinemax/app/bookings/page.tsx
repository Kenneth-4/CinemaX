"use client";
import { useSearchParams } from "next/navigation";

export default function BookingsPage() {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("movieId");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      <h1 className="text-4xl font-bold text-white mb-4">Book Tickets</h1>
      {movieId ? (
        <p className="mb-6">Booking for movie ID: {movieId}</p>
      ) : (
        <p className="mb-6 text-gray-400">Select a movie to begin booking.</p>
      )}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <p className="text-gray-300">Booking form will go here.</p>
      </div>
    </div>
  );
}


