"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-white">Cinemax</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/movies" className="px-4 py-2 text-white hover:text-red-500 transition-colors">
              Movies
            </Link>
            <Link href="/bookings" className="px-4 py-2 text-white hover:text-red-500 transition-colors">
              Bookings
            </Link>
            <Link href="/login" className="px-4 py-2 text-white hover:text-red-500 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors font-medium">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


