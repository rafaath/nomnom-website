export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">NomNom</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        All-in-one restaurant point of sale (POS), payments platform and management system for smarter service.
      </p>
      <div className="flex gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-md">Get Started</button>
        <button className="border border-black px-6 py-3 rounded-md">Learn More</button>
      </div>
    </main>
  );
}
