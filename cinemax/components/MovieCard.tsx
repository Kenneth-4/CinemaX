import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  poster: string;
  genre: string;
  rating: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:brightness-110 transition-all"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {movie.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{movie.genre}</p>
        <div className="flex gap-3">
          <Link
            href={`/movies/${movie.id}`}
            className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors font-medium"
          >
            Details
          </Link>
          <Link
            href={`/bookings?movieId=${movie.id}`}
            className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}


