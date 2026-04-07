import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative z-10 w-full py-24 md:py-40 px-4 md:px-8 border-b border-white/10"
      ref={ref}
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Glassmorphic Container overlaying the video */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[32px] md:rounded-[48px] overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-8 md:p-24"
        >
          {/* Holographic Subtle Accent */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-holographic blur-[100px] opacity-20 pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* Manifesto / Philosophy Text */}
            <div className="flex-1 flex flex-col">
              <h2 className="font-sans text-white/50 text-sm uppercase tracking-[0.2em] font-semibold mb-6">
                Design Philosophy
              </h2>
              <h3 className="font-bodoni italic text-white text-[clamp(32px,4vw,64px)] leading-[1.1] mb-8">
                Good design is obvious.<br />Great design is transparent.
              </h3>
              <p className="font-sans text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
                I believe that digital products should not only look stunning but fundamentally solve user problems. By merging strategic UX research with high-fidelity visual craft, I build experiences that humans love to use and businesses rely on.
              </p>
            </div>

            {/* Impact Numbers */}
            <div className="flex-1 flex justify-center border-l-0 md:border-l border-white/10 pl-0 md:pl-16">
              <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 w-full">
                <Counter end={40} suffix="+" label="Projects Delivered" isInView={isInView} />
                <Counter end={100} suffix="%" label="On-time Delivery" isInView={isInView} />
                <Counter end={15} suffix="+" label={<>Products Launched <br />from Scratch</>} isInView={isInView} />
                <Counter end={800} suffix="+" label="UI Components Built" isInView={isInView} />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function Counter({ end, suffix, label, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, end]);

  return (
    <div className="flex flex-col">
      <div 
        className="text-white text-[clamp(40px,4vw,64px)] leading-none mb-2 font-black italic tracking-wide pr-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {count}{suffix}
      </div>
      <div className="font-bodoni italic text-white/50 text-[clamp(14px,1vw,18px)]">
        {label}
      </div>
    </div>
  );
}
