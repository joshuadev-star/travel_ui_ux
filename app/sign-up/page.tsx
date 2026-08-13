// app/signup/page.tsx

import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700">
            Create Account ✈️
          </h1>

          <p className="text-gray-500 mt-2">
            Join us and start your next adventure.
          </p>
        </div>

        <form className="space-y-5">

          {/* FULL NAME */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}