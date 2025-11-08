import { useEffect, useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6000; // 6s faux load
    const steps = 120; // smooth
    const interval = duration / steps;
    let current = 0;

    const id = setInterval(() => {
      current += 100 / steps;
      setProgress(Math.min(100, current));
      if (current >= 100) clearInterval(id);
    }, interval);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-10 mx-auto w-full max-w-xl px-6">
      <div className="h-4 w-full rounded-full bg-amber-200/60 backdrop-blur-md border border-amber-300/60 overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-center text-amber-900 font-semibold tracking-wide">
        {Math.round(progress)}% baking…
      </div>
    </div>
  );
}

export default ProgressBar;
