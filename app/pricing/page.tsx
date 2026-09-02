import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-lg sm:p-10">
        {/* HEADING */}
        <h1 className="mb-4 text-center text-4xl font-bold text-green-90 sm:text-5xl">
          Pricing Plans
        </h1>

        <p className="mx-auto mb-20 max-w-2xl text-center text-gray-600">
          Choose the plan that fits your adventure needs. All plans include
          offline maps, schedule support, and immersive AR guidance.
        </p>

        {/* PRICING CARDS */}
        <div className="grid items-stretch gap-16 lg:grid-cols-3">

          {/* STARTER */}
          <section className="relative flex min-h-[500px] flex-col rounded-4xl border border-gray-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-green-50">
              Starter
            </p>

            <h2 className="mb-4 text-center text-5xl font-bold text-green-90">
              Free
            </h2>

            <p className="mb-8 text-gray-600">
              Perfect for casual explorers who want to test the route planner.
            </p>

            <ul className="mb-8 space-y-4 text-left text-gray-700">
              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0 text-green-50" />
                Offline map access
              </li>

              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0 text-green-50" />
                2 saved locations
              </li>

              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0 text-green-50" />
                Basic support
              </li>
            </ul>

            {/* GET STARTED BUTTON */}
            <button className="mt-auto w-full rounded-xl bg-green-50 px-6 py-3 font-semibold text-black transition hover:bg-green-90 hover:text-white">
              Get Started
            </button>
          </section>

          {/* PREMIUM */}
          <section className="relative flex min-h-[500px] flex-col rounded-4xl border border-green-50 bg-green-50 p-8 text-left text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-white/80">
              Popular
            </p>

            <h2 className="mb-4 text-center text-5xl font-bold">
              Premium
            </h2>

            <p className="mb-8 text-white/80">
              Best for active travelers needing full route guidance and AR
              features.
            </p>

            {/* FEATURES */}
            <ul className="mb-8 space-y-4 text-left text-white">
              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0" />
                Unlimited offline maps
              </li>

              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0" />
                Custom adventure schedules
              </li>

              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0" />
                AR navigation support
              </li>
            </ul>

            <button className="mt-auto w-full rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-90">
              Start Free Trial
            </button>
          </section>

          {/* ENTERPRISE */}
          <section className="relative flex min-h-[500px] flex-col rounded-4xl border border-gray-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-green-50">
              Enterprise
            </p>

            <h2 className="mb-4 text-center text-5xl font-bold text-green-90">
              Custom
            </h2>

            <p className="mb-8 text-gray-600">
              Ideal for groups, guides, and corporate adventure teams.
            </p>

            <ul className="mb-8 space-y-4 text-left text-gray-700">
              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0 text-green-50" />
                Team plans
              </li>

              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0 text-green-50" />
                Dedicated support
              </li>

              <li className="flex items-center gap-3">
                <Check size={20} className="shrink-0 text-green-50" />
                Custom adventure maps
              </li>
            </ul>

            <button className="mt-auto w-full rounded-xl border border-green-50 bg-white px-6 py-3 font-semibold text-green-90 transition hover:bg-green-50 hover:text-white">
              Contact Sales
            </button>
          </section>

        </div>
      </div>
    </main>
  );
}/