import MovieCard from "../components/MovieCard";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
      genre: "Action, Crime, Drama",
      rating: "9.0"
    },
    {
      id: 2,
      title: "Inception",
      poster: "https://images.unsplash.com/photo-1586891592115-a1ae0e27cff9?w=400&h=600&fit=crop",
      genre: "Action, Sci-Fi, Thriller",
      rating: "8.8"
    },
    {
      id: 3,
      title: "Interstellar",
      poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
      genre: "Sci-Fi, Drama, Adventure",
      rating: "8.6"
    },
    {
      id: 4,
      title: "The Matrix",
      poster: "https://images.unsplash.com/photo-1546614032-c0df481ddb7e?w=400&h=600&fit=crop",
      genre: "Action, Sci-Fi",
      rating: "8.7"
    },
    {
      id: 5,
      title: "Pulp Fiction",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      genre: "Crime, Drama",
      rating: "8.9"
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      poster: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=600&fit=crop",
      genre: "Drama",
      rating: "9.3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
            <span className="text-white font-extrabold text-2xl md:text-3xl">C</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white">Cinemax</h1>
        </div>
        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto">
          Lights. Camera. Thrill. Experience movies the way they were meant to be.
        </p>
      </section>

      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Now Showing</h2>
        <p className="text-gray-400 text-lg">Book your tickets to the latest blockbusters</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
