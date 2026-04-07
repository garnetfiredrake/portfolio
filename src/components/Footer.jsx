import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 w-full flex flex-col justify-between px-4 md:px-8 pt-32 pb-8 bg-black/60 backdrop-blur-sm border-t border-white/10">
      
      {/* Main Footer Content */}
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-12">
        
        {/* Epic Giant Text */}
        <h2 className="font-sans text-[clamp(48px,12vw,240px)] leading-[0.8] font-bold text-white tracking-tighter uppercase relative w-fit mb-0">
          <span className="relative z-10 inline-block pr-[0.1em] premium-gradient-text text-transparent">
            LET'S TALK
          </span>
        </h2>

        {/* Links */}
        <div className="flex gap-16 md:gap-24 xl:pb-4">
          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[#804B5A] text-sm uppercase tracking-widest font-bold mb-2">Socials</h4>
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aidenhuo/' },
              { name: 'Behance', url: 'https://www.behance.net/aidenhuo' }
            ].map((platform) => (
              <a 
                key={platform.name} 
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-white/70 hover:text-white text-lg transition-colors group relative w-fit"
              >
                {platform.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[#804B5A] text-sm uppercase tracking-widest font-bold mb-2">Contact</h4>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.aidenhuo@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/70 hover:text-white text-lg transition-colors group relative w-fit"
            >
              hello.aidenhuo@gmail.com
            </a>
            <div className="text-white/40 text-sm mt-4 font-sans">
              Based in Taipei, Taiwan <br/>
              Local time: GMT+8
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8 gap-4">
        <div className="font-sans text-white/40 text-sm">
          © {new Date().getFullYear()} AidenHuo. All rights reserved.
        </div>
        <button 
          onClick={scrollToTop}
          className="font-sans text-white/60 hover:text-white text-sm uppercase tracking-widest flex items-center gap-2 group transition-colors cursor-pointer"
        >
          Back to Top
          <svg className="w-4 h-4 transform transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
        </button>
      </div>
      
    </footer>
  );
}
