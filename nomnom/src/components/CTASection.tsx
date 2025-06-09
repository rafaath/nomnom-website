import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="my-16 text-center bg-black text-white py-20 px-4 rounded-3xl">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Your restaurant&apos;s success starts with a single step—let&apos;s achieve it together!</h2>
      <Link href="#demo" className="inline-block bg-white text-black px-6 py-3 rounded-md text-sm">Book a demo</Link>
    </section>
  );
}
