export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-5xl font-bold text-center text-green-90 mb-8">Our Services</h1>
        <p className="text-center text-gray-600 mb-10">
          Discover the travel services we provide to make your next adventure safe, seamless, and unforgettable.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-4xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-green-90 mb-4">Offline Maps</h2>
            <p className="text-gray-600">Access detailed maps even without internet connection, so you can navigate remote trails with confidence.</p>
          </article>

          <article className="rounded-4xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-green-90 mb-4">AR Guidance</h2>
            <p className="text-gray-600">Use augmented reality features to visualize routes and landmarks while hiking or climbing.</p>
          </article>

          <article className="rounded-4xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-green-90 mb-4">Trip Planning</h2>
            <p className="text-gray-600">Plan your adventure easily with schedule templates, route suggestions, and group coordination tools.</p>
          </article>
        </div>
      </div>
    </main>
  )
}
