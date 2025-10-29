import MovieCard from "../../components/MovieCard";

const movies = [
  { id: 1, title: "The Dark Knight", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop", genre: "Action, Crime, Drama", rating: "9.0" },
  { id: 2, title: "Inception", poster: "https://images.unsplash.com/photo-1586891592115-a1ae0e27cff9?w=400&h=600&fit=crop", genre: "Action, Sci-Fi, Thriller", rating: "8.8" },
  { id: 3, title: "Interstellar", poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop", genre: "Sci-Fi, Drama, Adventure", rating: "8.6" },
  { id: 4, title: "The Matrix", poster: "https://images.unsplash.com/photo-1546614032-c0df481ddb7e?w=400&h=600&fit=crop", genre: "Action, Sci-Fi", rating: "8.7" },
  { id: 5, title: "Pulp Fiction", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop", genre: "Crime, Drama", rating: "8.9" },
  { id: 6, title: "The Shawshank Redemption", poster: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=600&fit=crop", genre: "Drama", rating: "9.3" },
];

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Movies</h1>
        <p className="text-gray-400">Browse all available movies</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}


