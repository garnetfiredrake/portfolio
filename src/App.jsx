import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col selection:bg-white/20">
      {/* Background Video - Fixed so it acts as base for entire scrolling page */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_2yHSJCXypaKzALrUyDYh61V0nyk/hf_20260402_082707_3d64cf57-650c-4e39-af10-1d45276e4dae.mp4"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Screen 1: Hero Block */}
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Transparent Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <Hero />
      </div>

      {/* Screen 2: Marquee */}
      <Marquee />
    </div>
  );
}
