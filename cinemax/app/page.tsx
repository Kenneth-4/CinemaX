export default function Home() {
  // Sample movie data
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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-white">Cinemax</span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white hover:text-red-500 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors font-medium">
                Sign Up
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Now Showing
          </h1>
          <p className="text-gray-400 text-lg">
            Book your tickets to the latest blockbusters
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  {movie.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{movie.genre}</p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors font-medium">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold text-white">Cinemax</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Your ultimate destination for the best cinema experience. Book tickets, explore showtimes, and enjoy the latest blockbusters.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    Movies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    Theaters
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    Coming Soon
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    Promotions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  Email: info@cinemax.com
                </li>
                <li className="text-gray-400">
                  Phone: +1 (555) 123-4567
                </li>
                <li className="text-gray-400">
                  Support: 24/7 Available
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Cinemax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
