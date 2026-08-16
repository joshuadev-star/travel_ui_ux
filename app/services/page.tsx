import { Map, Navigation, CalendarDays } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="mb-8 text-center text-5xl font-bold text-green-90">
          Our Services
        </h1>

        <p className="mb-16 text-center text-gray-600">
          Discover the travel services we provide to make your next adventure
          safe, seamless, and unforgettable.
        </p>

        <div className="grid gap-16 lg:grid-cols-3">
          {/* OFFLINE MAPS */}
          <article className="relative rounded-4xl border border-gray-200 p-8 pt-16 shadow-sm">
            <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-green-50 text-black shadow-lg">
              <Map size={32} />
            </div>

            <h2 className="mb-4 text-center text-3xl font-bold text-green-90">
              Offline Maps
            </h2>

            <p className="text-center text-gray-600">
              Access detailed maps even without internet connection, so you can
              navigate remote trails with confidence.
            </p>
          </article>

          {/* AR GUIDANCE */}
          <article className="relative rounded-4xl border border-gray-200 p-8 pt-16 shadow-sm">
            <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-green-50 text-black shadow-lg">
              <Navigation size={32} />
            </div>

            <h2 className="mb-4 text-center text-3xl font-bold text-green-90">
              AR Guidance
            </h2>

            <p className="text-center text-gray-600">
              Use augmented reality features to visualize routes and landmarks
              while hiking or climbing.
            </p>
          </article>

          {/* TRIP PLANNING */}
          <article className="relative rounded-4xl border border-gray-200 p-8 pt-16 shadow-sm">
            <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-green-50 text-black shadow-lg">
              <CalendarDays size={32} />
            </div>

            <h2 className="mb-4 text-center text-3xl font-bold text-green-90">
              Trip Planning
            </h2>

            <p className="text-center text-gray-600">
              Plan your adventure easily with schedule templates, route
              suggestions, and group coordination tools.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}