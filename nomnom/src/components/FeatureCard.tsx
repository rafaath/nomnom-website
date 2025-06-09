import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function FeatureCard({ title, description, children }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg shadow bg-white text-center flex flex-col items-center">
      {children}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
