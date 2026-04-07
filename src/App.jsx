import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import SelectedWorks from './components/SelectedWorks';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import MuxPlayer from "@mux/mux-player-react";

export default function App() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive Hook: Detect breakpoint exclusively for swapping native MUX media assets
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile(); // Check on initial mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Absolute Choreographic Timeline:
  // 0.0s - 1.0s: Pure black smoothly dissolves to reveal Pinterest Pink Gradient (Dark-to-Light).
  // 1.0s - 1.8s: Pink Gradient dissolves to reveal the absolute Static 0-th Frame Image.
  // 1.8s - 1.925s: Static 0-th frame holds absolutely perfectly still for 0.125s.
  // 1.925s: Lock releases! Static frame hard-cuts to moving video, and Hero text orchestrates.
  useEffect(() => {
    const choreographyTimer = setTimeout(() => setIsVideoReady(true), 1925);
    return () => clearTimeout(choreographyTimer);
  }, []);

  const videoId = isMobile ? "NlrfzJPyWXj01XsiHFQP7E8RDuZfId3PkXZr2f1kwU6o" : "o802JTJMU00OY7Jxr8h02USIAnpFvm4byVB5IkOMJujkmw";
  // Force 1280px width thumbnail request to bypass MUX's generic 640px default and guarantee 3x Retina display clarity
  const posterUrl = `https://image.mux.com/${videoId}/thumbnail.jpg?time=0&width=1280`;

  const { scrollY } = useScroll();
  
  // Fade in the glass overlay as user scrolls down the first 800px
  const overlayOpacity = useTransform(scrollY, [100, 800], [0, 0.725]);

  return (
    <div className="relative min-h-screen w-full flex flex-col selection:bg-white/20 overflow-x-hidden">
      <MuxPlayer
        playbackId={videoId}
        poster={posterUrl}
        autoPlay="muted"
        loop
        muted
        playsInline
        minResolution="720p"
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        style={{ 
          '--media-object-fit': 'cover',
          '--media-loading-indicator-display': 'none',
          '--media-error-display': 'none'
        }}
      />

      {/* Layer 1: STATIC 0-TH FRAME MASK (Holds the video perfectly still) */}
      {!isVideoReady && (
        <img
          src={posterUrl}
          className="fixed inset-0 w-full h-full object-cover z-[1] pointer-events-none"
          alt="Intro Frame"
        />
      )}

      {/* Layer 2: PINTEREST PINK GRADIENT (The abstract Dark-to-Light phase) */}
      <motion.div
        className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#E6CCD7] via-[#D89CAE] to-[#CD7D94] z-[2] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeInOut" }} // Starts fading precisely when Layer 3 finishes
      />

      {/* Layer 3: PURE BLACK CINEMATIC CURTAIN (Fades out immediately to reveal Dark-to-Light Pink) */}
      <motion.div 
        className="fixed inset-0 w-full h-full bg-[#0a0a0a] z-[3] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }} // Fades exactly in the first 1.0s
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

        {/* Hero Content Block - Renders only when background is ready to choreograph entrance */}
        {isVideoReady && <Hero />}
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
