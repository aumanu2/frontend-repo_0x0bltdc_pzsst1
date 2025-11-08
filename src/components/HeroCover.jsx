import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Spline
        scene="https://prod.spline.design/CoqJ4UdBiLF2djJK/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/60 via-transparent to-amber-50/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/70 to-transparent" />
    </div>
  );
}

export default HeroCover;
