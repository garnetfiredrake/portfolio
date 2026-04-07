import { useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'UX RESEARCH',
    description: 'Understanding user behaviors and market needs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Data/Analytics Dashboard
  },
  {
    title: 'UI DESIGN',
    description: 'Crafting pixel-perfect, aesthetic interfaces.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop', // Clean UI/Mobile Mockup
  },
  {
    title: 'PROTOTYPING',
    description: 'Breathing life into static designs via motion.',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=800&auto=format&fit=crop', // Code/Motion
  },
  {
    title: 'BRAND IDENTITY',
    description: 'Building cohesive visual systems and guidelines.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop', // Brand Guidelines/Colours
  },
];

export default function Services() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative z-10 w-full min-h-[90vh] py-24 md:py-32 flex flex-col justify-center items-center px-4 md:px-8 border-b border-white/10 -mt-[25px]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16 md:mb-24 translate-y-[12px]">
          <div className="inline-flex w-fit">
            <div className="py-2 flex items-center">
              <h2 className="font-sans font-semibold tracking-[0.1em] uppercase whitespace-nowrap text-[clamp(10px,0.65vw,24px)] text-white/60">
                Core Competencies
              </h2>
            </div>
          </div>
          <p className="font-bodoni italic text-white/90 text-[clamp(20px,2vw,36px)] whitespace-normal md:whitespace-nowrap">
            Bridging the gap between aesthetic form and seamless function.
          </p>
        </div>

        {/* Services List with Hover Image Reveal */}
        <div className="flex flex-col w-full">
          {services.map((service, i) => (
            <ServiceRow 
              key={i} 
              service={service} 
              index={i} 
              containerRef={containerRef} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index, containerRef }) {


  return (
    <motion.div
      initial="initial"
      className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-t border-white/10 overflow-visible"
    >
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 3.2, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
        className="relative z-20 flex items-center gap-6 md:gap-12"
      >
        <span className="font-serif italic text-white/30 text-[clamp(24px,2vw,40px)]">
          0{index + 1}
        </span>
        <h3 className="font-sans text-white text-[clamp(40px,5vw,96px)] font-bold tracking-tight uppercase leading-none mix-blend-difference">
          {service.title}
        </h3>
      </motion.div>

      {/* Description */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 3.2, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 + 0.1 }}
        className="relative z-20 mt-4 md:mt-0 text-white/60 font-sans text-[clamp(14px,1vw,18px)] max-w-sm md:text-right opacity-100"
      >
        {service.description}
      </motion.div>

    </motion.div>
  );
}
