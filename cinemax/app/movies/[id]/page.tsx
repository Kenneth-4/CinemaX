import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  poster: string;
  genre: string;
  rating: string;
  synopsis: string;
};

const sample: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=1200&fit=crop",
    genre: "Action, Crime, Drama",
    rating: "9.0",
    synopsis:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
  },
];

export default function MovieDetails({ params }: { params: { id: string } }) {
  const movie = sample.find((m) => String(m.id) === params.id);

  if (!movie) {
    return (
      <div className="min-h-screen text-gray-300">
        <h1 className="text-2xl">Movie not found</h1>
        <Link href="/movies" className="text-red-500 underline mt-4 inline-block">
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black grid md:grid-cols-2 gap-8">
      <div className="aspect-[2/3] w-full rounded-xl overflow-hidden">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
      </div>
      <div className="text-gray-200">
        <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{movie.rating}</span>
          <span className="text-gray-400">{movie.genre}</span>
        </div>
        <p className="text-gray-300 mb-8">{movie.synopsis}</p>
        <div className="flex gap-4">
          <Link href={`/bookings?movieId=${movie.id}`} className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium">
            Book Tickets
          </Link>
          <Link href="/movies" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}


