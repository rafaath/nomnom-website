import Image from 'next/image';

const logos = [
  '/next.svg',
  '/vercel.svg',
  '/file.svg',
  '/globe.svg',
  '/window.svg',
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="mb-8 text-center font-mono uppercase text-gray-500 text-sm">
        Trusted by
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {logos.map((src) => (
          <div key={src} className="h-12 w-28 relative">
            <Image src={src} alt="logo" fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
