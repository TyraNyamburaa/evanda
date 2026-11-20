import { useEffect } from 'react';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { ArrowUpRight } from 'lucide-react';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    const updateScroll = (time: number) => lenis.raf(time * 1000);
    const animation = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      );
    });

    gsap.ticker.add(updateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      animation.revert();
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="hero-title text-4xl font-bold text-gray-800">
        Welcome to evanda
      </h1>
      <ArrowUpRight aria-hidden="true" className="mt-4 h-10 w-10 text-gray-500" />
      <p className="mt-3 max-w-lg text-gray-600">
        A modern platform for Evanda.
      </p>
    </main>
  );
}

export default App;