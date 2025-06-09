import FeatureCard from '@/components/FeatureCard';
import TrustedBy from '@/components/TrustedBy';
import CTASection from '@/components/CTASection';
import { CheckCircleIcon, CreditCardIcon, ChartBarIcon, DevicePhoneMobileIcon, TruckIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';

const features = [
  { title: 'Smart POS', description: 'Modern point of sale with seamless payments', icon: CreditCardIcon },
  { title: 'Online Ordering', description: 'Take orders online with ease', icon: DevicePhoneMobileIcon },
  { title: 'Analytics', description: 'Insights to grow your business', icon: ChartBarIcon },
  { title: 'Delivery', description: 'Integrates with popular delivery services', icon: TruckIcon },
  { title: 'Automation', description: 'Automate routine tasks and save time', icon: Cog8ToothIcon },
  { title: 'Reliability', description: 'Rock-solid infrastructure you can trust', icon: CheckCircleIcon },
];

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center text-center pt-24 pb-40 bg-gray-50 relative overflow-hidden">
        <h1 className="text-5xl sm:text-6xl font-bold max-w-3xl">Empower local restaurants to become local champions</h1>
        <p className="mt-6 max-w-2xl text-gray-600">Streamline restaurant operation, make staff happy, and elevate guest experience. All in one platform.</p>
        <a href="#demo" className="mt-10 bg-black text-white px-6 py-3 rounded-md text-sm">Book a demo</a>
      </section>

      <TrustedBy />

      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <FeatureCard key={title} title={title} description={description}>
              <Icon className="h-8 w-8 mb-4 text-black" />
            </FeatureCard>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
