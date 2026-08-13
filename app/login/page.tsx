// app/login/page.tsx

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue your travel journey.
          </p>
        </div>

        <form className="space-y-5">
          
          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* SIGN UP LINK */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </main>
  );
}