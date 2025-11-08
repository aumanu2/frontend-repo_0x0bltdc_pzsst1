import { Leaf, Milk, Timer, Wheat } from 'lucide-react';

function FeatureBadges() {
  const features = [
    { icon: Wheat, label: 'Sourdough Starter' },
    { icon: Timer, label: 'Slow Rise' },
    { icon: Milk, label: 'Butter & Honey' },
    { icon: Leaf, label: 'Farm Fresh' },
  ];

  return (
    <div className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto px-6">
      {features.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center justify-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-3 py-2 border border-amber-200 text-amber-800 shadow-sm"
        >
          <Icon className="h-4 w-4 text-amber-600" />
          <span className="text-sm font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default FeatureBadges;
