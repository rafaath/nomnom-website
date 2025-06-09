import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center text-center pt-20 pb-32 bg-gray-50">
        <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">Empower local restaurants to become local champions</h1>
        <p className="mt-6 max-w-xl text-gray-600">Streamline restaurant operation, make staff happy, and elevate guest experience. All in one platform.</p>
        <a href="#demo" className="mt-8 bg-black text-white px-6 py-3 rounded-md text-sm">Book a demo</a>
      </section>

      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Smart POS" description="Modern point of sale with seamless payments" />
          <FeatureCard title="Online Ordering" description="Take orders online with ease" />
          <FeatureCard title="Analytics" description="Insights to grow your business" />
        </div>
      </section>
    </div>
  );
}
