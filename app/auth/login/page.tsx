import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 py-8 sm:px-6">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-green-700">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to continue your travel journey.
          </p>

        </div>

        <form className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* SIGN IN */}
          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Sign In
          </button>

        </form>

        {/* SIGN UP */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="font-semibold text-green-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </main>
  );
}