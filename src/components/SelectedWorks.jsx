import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import projects from '../data/works.json';

export default function SelectedWorks() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="relative z-10 w-full min-h-screen py-24 md:py-32 flex flex-col justify-start bg-black"
    >
      <div className="w-full flex flex-col">
        
        {/* Header */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-24 flex flex-col gap-4 py-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="inline-flex w-fit"
          >
            <div className="py-2 flex items-center">
              <span className="text-white font-sans font-semibold tracking-[0.1em] uppercase whitespace-nowrap text-[clamp(10px,0.65vw,24px)] md:text-[18px] lg:text-[clamp(10px,0.65vw,24px)]">
                Selected Works
              </span>
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="font-bodoni italic text-white text-[clamp(20px,2vw,36px)] md:text-[46px] lg:text-[clamp(20px,2vw,36px)] leading-tight whitespace-normal md:whitespace-normal lg:whitespace-nowrap"
          >
            Featured projects highlighting strategy & craft.
          </motion.h2>
        </div>

        {/* Adaptive Grid - Full Bleed, Zero Gap */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  
  // Use project specific origin or default to center
  const getOriginClass = () => {
    if (project.imagePosition === 'left top') return 'origin-top-left';
    if (project.imagePosition === 'right top') return 'origin-top-right';
    return 'origin-center';
  };
  
  const originClass = getOriginClass();

  return (
    <a 
      ref={cardRef}
      href={project.link}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      className={`flex flex-col w-full relative group ${project.link ? 'cursor-pointer' : ''}`}
    >
      {/* Full Bleed Image Container */}
      <div className="w-full aspect-[4/4] sm:aspect-[4/5] overflow-hidden relative bg-[#111] border-[0.5px] border-white/5">
        <div className="absolute inset-0 w-full h-full">
          {/* Base Image */}
          <img 
            src={project.image} 
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[250ms] ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:brightness-110 ${originClass}`}
            style={{ objectPosition: project.imagePosition || 'center' }}
          />
          {/* Hover Image (if exists) */}
          {project.hoverImage && (
            <img 
              src={project.hoverImage}
              alt={`${project.title} hover`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[250ms] ease-[0.16,1,0.3,1] opacity-0 group-hover:opacity-100 group-hover:scale-105 ${originClass}`}
              style={{ objectPosition: project.imagePosition || 'center' }}
            />
          )}
        </div>

        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-[250ms] pointer-events-none"></div>
      </div>

      {/* Tiny Meta Text under the image with Reveal Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
        className="pt-2 pb-8 px-2 flex flex-col font-sans tracking-wide"
      >
        <span className="text-white/90 text-[11px] md:text-[18px] lg:text-[11px] font-medium leading-tight">
          {project.title}
        </span>
        <span className="text-white/40 text-[11px] md:text-[16px] lg:text-[11px] leading-tight mt-[2px]">
          {project.year}
        </span>
      </motion.div>
    </a>
  );
}
