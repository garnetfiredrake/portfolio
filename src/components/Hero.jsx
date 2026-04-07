import { motion } from 'framer-motion';
import { useState } from 'react';
import Star from './Star';

export default function Hero() {
  const [starLanded, setStarLanded] = useState([false, false, false, false]);

  return (
    <main className="relative z-10 flex-1 flex flex-col items-center px-4 md:px-6 w-full pb-[6vh] md:pb-[8vh]">
      {/* Main Title Group - Responsive absolute positioning */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(5vh+60px)] md:top-1/2 md:-translate-y-1/2 md:-mt-[38vh] w-fit max-w-[95vw] xl:max-w-[1400px] flex flex-col items-center p-[clamp(20px,1.04vw,50px)] text-center scale-[1.2] md:scale-100 origin-top">

        {/* Corner Accents */}
        {[
          "top-[clamp(15px,1.56vw,60px)] left-0 min-[2000px]:mt-[25px]",
          "top-[clamp(15px,1.56vw,60px)] right-0 min-[2000px]:mt-[25px]",
          "bottom-[5px] md:-bottom-[15px] left-0 min-[2000px]:-bottom-[55px]",
          "bottom-[5px] md:-bottom-[15px] right-0 min-[2000px]:-bottom-[55px]"
        ].map((positionClass, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -360 }}
            animate={{ opacity: 1, scale: [0, 5.5, 1], rotate: 0 }}
            transition={{ 
              delay: 1.5 + (i * 0.195),
              opacity: { duration: 0.6 },
              scale: { duration: 1.2, times: [0, 0.45, 1], ease: ["easeOut", "easeInOut"] },
              rotate: { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.95] }
            }}
            onAnimationComplete={() => {
              setStarLanded(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }}
            className={`absolute ${positionClass}`}
          >
            <div className={`text-white animate-reticle ${!starLanded[i] ? '[animation-duration:1.6s]' : ''}`}>
              <Star className="w-[clamp(10px,0.7vw,28px)] h-[clamp(10px,0.7vw,28px)]" />
            </div>
          </motion.div>
        ))}

        {/* Text Wrapper */}
        <div className="flex flex-col items-center min-[2560px]:translate-y-[20px]">
          {/* Featured Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="inline-flex mb-2 md:mb-8 cursor-default"
          >
            <div className="py-[clamp(6px,0.31vw,12px)] px-[clamp(12px,1.04vw,40px)] flex items-center justify-center">
              <span className="text-[#804B5A] text-[clamp(10px,0.65vw,53px)] font-sans font-semibold tracking-[0.1em] uppercase">
                Featured UI/UX Work
              </span>
            </div>
          </motion.div>

          {/* Dynamic Headline */}
          {/* Dynamic Headline */}
          <h1 className="text-center flex flex-col items-center justify-center mb-0 w-full relative z-10">
            <span className="font-serif italic text-white text-[clamp(32px,8vw,48px)] md:text-[clamp(48px,6vw,282px)] leading-none whitespace-nowrap inline-flex tracking-tight">
              {"web, apps & branding".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + (index * 0.03), 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

      </div>

      {/* Bottom Actions - Auto Layout anchored to bottom */}
      <div className="flex flex-col items-center mt-auto w-full max-w-3xl px-4 md:px-8">
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, type: "spring", stiffness: 90, damping: 20 }}
          className="w-full flex justify-center"
        >
          <motion.button 
            initial="initial"
            whileHover="hover"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center rounded-full bg-white/5 p-[clamp(2px,0.2vw,8px)] backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 cursor-pointer mb-[clamp(16px,1.25vw,48px)]"
          >
            <div className="relative flex w-full items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-[clamp(24px,2.08vw,80px)] py-[clamp(12px,0.83vw,32px)] transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 overflow-hidden">
              <div className="relative z-10 flex items-center text-white group-hover:text-white transition-colors">
                <motion.svg 
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: 360 }
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 10, mass: 1 }}
                  className="w-[clamp(16px,1.25vw,48px)] h-[clamp(16px,1.25vw,48px)] mr-[clamp(12px,0.83vw,32px)]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-medium text-[clamp(14px,0.88vw,34px)] tracking-wide mb-[clamp(2px,0.2vw,8px)]">
                    View My Latest Work
                  </span>
                  <span className="font-serif italic text-white/80 text-[clamp(12px,0.72vw,28px)]">
                    Scroll to explore
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.button>
        </motion.div>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8, ease: "easeOut" }}
          className="font-sans text-white/95 w-full text-center text-[clamp(14px,0.83vw,32px)] leading-relaxed [text-shadow:0_4px_16px_rgba(128,75,90,0.85)]"
        >
          <span className="landscape:whitespace-nowrap portrait:whitespace-normal">
            I design intuitive UI/UX for web, apps, SaaS dashboards and cross-platform setups.
          </span>
          <br />
          <span className="hidden md:inline">
            Elevating your brand with cohesive VI and identity design.
          </span>
          <span className="inline md:hidden">
            Elevating your brand <br />
            with cohesive VI and identity design.
          </span>
        </motion.p>
      </div>
    </main>
  );
}
