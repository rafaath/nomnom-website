import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="p-6 rounded-lg shadow bg-white text-center flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="text-sm text-gray-600">
            {f}
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-black text-white px-4 py-2 rounded-md text-sm">
        Select Plan
      </button>
    </div>
  );
}
