import { motion } from 'framer-motion';
import Star from './Star';

export default function Hero() {
  return (
    <main className="relative z-10 flex-1 flex flex-col items-center px-4 md:px-6 w-full pb-[6vh] md:pb-[8vh]">
      {/* Main Title Group - Responsive absolute positioning */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -mt-[310px] md:top-[-10px] md:translate-y-0 md:mt-0 w-fit max-w-[95vw] xl:max-w-[1400px] flex flex-col items-center p-[20px] text-center">

        {/* Corner Accents */}
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0"
        ].map((positionClass, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 3, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.9 + (i * 0.1) }}
            className={`absolute ${positionClass}`}
          >
            <div className="text-white animate-reticle">
              <Star className="w-[clamp(10px,0.7vw,18px)] h-[clamp(10px,0.7vw,18px)]" />
            </div>
          </motion.div>
        ))}

        {/* Text Wrapper */}
        <div className="flex flex-col items-center">
          {/* Featured Badge */}
          <motion.div 
            initial={{ scale: 0, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: -20 }}
            transition={{ type: "spring", stiffness: 220, damping: 15, delay: 1.2 }}
            className="inline-flex rounded-full bg-white/50 backdrop-blur-md border border-white/60 p-[clamp(2px,0.2vw,8px)] mb-2 md:mb-8 transition-colors hover:bg-white/70 cursor-default shadow-[0_2px_15px_rgba(0,0,0,0.05)]"
          >
            <div className="rounded-full bg-white/20 py-[clamp(6px,0.31vw,12px)] px-[clamp(12px,1.04vw,40px)] flex items-center justify-center">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#804B5A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#804B5A]"></span>
              </span>
              <span className="text-[#804B5A] text-[clamp(10px,0.65vw,24px)] font-sans font-semibold tracking-[0.1em] uppercase">
                Featured UI/UX Work
              </span>
            </div>
          </motion.div>

          {/* Dynamic Headline */}
          <h1 className="text-center flex flex-col items-center justify-center mb-0 w-full relative z-10">
            <span className="font-serif italic text-white text-[clamp(32px,8vw,48px)] md:text-[clamp(48px,6vw,128px)] leading-none whitespace-nowrap inline-flex tracking-tight">
              {"web, apps & branding".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: 0.2 + (index * 0.04), 
                    duration: 0.05 
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
        <motion.button 
          initial="initial"
          whileHover="hover"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="group relative inline-flex items-center justify-center rounded-full bg-white/5 p-[clamp(2px,0.2vw,8px)] backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 mb-[clamp(16px,1.25vw,48px)]"
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

        {/* Sub-headline */}
        <p className="font-sans text-white/95 w-full text-center text-[clamp(14px,0.83vw,32px)] leading-relaxed [text-shadow:0_4px_16px_rgba(128,75,90,0.85)]">
          <span className="landscape:whitespace-nowrap portrait:whitespace-normal">
            I design intuitive UI/UX for web, apps, SaaS dashboards and cross-platform setups.
          </span>
          <br />
          Elevating your brand with cohesive VI and identity design.
        </p>
      </div>
    </main>
  );
}
