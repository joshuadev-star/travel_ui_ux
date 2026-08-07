export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-5xl font-bold text-center text-green-90 mb-8">Pricing Plans</h1>
        <p className="text-center text-gray-600 mb-10">
          Choose the plan that fits your adventure needs. All plans include offline maps, schedule support, and immersive AR guidance.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="rounded-4xl border border-gray-200 p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase text-green-50 mb-4">Starter</p>
            <h2 className="text-5xl font-bold text-green-90 mb-4">Free</h2>
            <p className="text-gray-600 mb-8">Perfect for casual explorers who want to test the route planner.</p>
            <ul className="space-y-3 text-left text-gray-700 mb-8">
              <li>Offline map access</li>
              <li>2 saved locations</li>
              <li>Basic support</li>
            </ul>
            <button className="btn_white text-green-90 w-full">Get Started</button>
          </section>

          <section className="rounded-4xl border border-green-50 p-8 text-center shadow-sm bg-green-50 text-white">
            <p className="text-sm font-semibold uppercase mb-4">Popular</p>
            <h2 className="text-5xl font-bold mb-4">Premium</h2>
            <p className="text-white/80 mb-8">Best for active travelers needing full route guidance and AR features.</p>
            <ul className="space-y-3 text-left text-white/90 mb-8">
              <li>Unlimited offline maps</li>
              <li>Custom adventure schedules</li>
              <li>AR navigation support</li>
            </ul>
            <button className="btn_dark_green w-full">Start Free Trial</button>
          </section>

          <section className="rounded-4xl border border-gray-200 p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase text-green-50 mb-4">Enterprise</p>
            <h2 className="text-5xl font-bold text-green-90 mb-4">Custom</h2>
            <p className="text-gray-600 mb-8">Ideal for groups, guides, and corporate adventure teams.</p>
            <ul className="space-y-3 text-left text-gray-700 mb-8">
              <li>Team plans</li>
              <li>Dedicated support</li>
              <li>Custom adventure maps</li>
            </ul>
            <button className="btn_white text-green-90 w-full">Contact Sales</button>
          </section>
        </div>
      </div>
    </main>
  )
}
