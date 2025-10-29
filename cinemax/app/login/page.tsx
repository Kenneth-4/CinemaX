export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
      <form className="bg-gray-800/50 p-6 rounded-xl space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input className="w-full rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Password</label>
          <input type="password" className="w-full rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-white" />
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium">Sign In</button>
      </form>
    </div>
  );
}


