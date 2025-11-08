import HeroCover from './components/HeroCover';
import GameTitle from './components/GameTitle';
import ProgressBar from './components/ProgressBar';
import FeatureBadges from './components/FeatureBadges';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-amber-50 text-amber-900">
      {/* 3D voxel farm cover as full-bleed background */}
      <HeroCover />

      {/* Foreground content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <GameTitle />
        <ProgressBar />
        <FeatureBadges />
        <footer className="mt-10 text-center text-amber-800/80 px-6">
          <p>Tip: Sound on for oven crackles and morning birds.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
