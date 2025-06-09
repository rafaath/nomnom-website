import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-gray-200 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">NomNom</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
        <Link href="#demo" className="bg-black text-white px-4 py-2 rounded-md text-sm">Book a demo</Link>
      </div>
    </header>
  );
}
