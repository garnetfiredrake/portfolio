import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import SelectedWorks from './components/SelectedWorks';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

export default function App() {
  const { scrollY } = useScroll();
  
  // Fade in the glass overlay as user scrolls down the first 800px
  const overlayOpacity = useTransform(scrollY, [100, 800], [0, 0.725]);

  return (
    <div className="relative min-h-screen w-full flex flex-col selection:bg-white/20 overflow-x-hidden">
      {/* Background Video - Fixed so it acts as base for entire scrolling page */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_2yHSJCXypaKzALrUyDYh61V0nyk/hf_20260404_161026_2271dc3b-ebd7-4f22-a673-f2c5b9fb06b3.mp4"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Progressive Scroll Glass Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 w-full h-full bg-black/70 backdrop-blur-3xl z-[1] pointer-events-none"
      />

      {/* Screen 1: Hero Block */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Transparent Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <Hero />
      </div>

      {/* Screen 2: Marquee */}
      <Marquee />

      {/* Screen 3: Services */}
      <Services />

      {/* Screen 4: Selected Works */}
      <SelectedWorks />
      
      {/* Screen 5: Philosophy */}
      <Philosophy />

      {/* Screen 6: Footer */}
      <Footer />
    </div>
  );
}
