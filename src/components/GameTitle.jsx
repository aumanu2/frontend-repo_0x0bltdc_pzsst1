import { Wheat } from 'lucide-react';

function GameTitle() {
  return (
    <div className="relative z-10 text-center py-16">
      <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-amber-200 shadow-sm">
        <Wheat className="h-5 w-5 text-amber-600" />
        <span className="text-amber-700 font-medium">Farm • Pixel • Game</span>
      </div>
      <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-amber-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
        Baking Bread
      </h1>
      <p className="mt-4 text-lg md:text-xl text-amber-800/90 max-w-xl mx-auto">
        A cozy voxel bakery world. Loading your oven-fresh adventure…
      </p>
    </div>
  );
}

export default GameTitle;
