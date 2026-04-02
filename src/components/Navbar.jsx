export default function Navbar() {
  return (
    <nav className="relative z-30 flex justify-between items-center px-6 md:px-10 py-6 w-full">
      <a href="#" className="text-white flex items-center hover:opacity-80 transition-opacity">
        <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-[80px] h-auto fill-white/40 stroke-white stroke-[0.25]">
          <path d="M662.5,89v161h-127.7c-9.7,0-17.5-9-17.5-18.9V75h131.5c7.5,0,13.6,6.3,13.6,14h0ZM534.8,271.9c-22.5,0-40.9-13.4-40.9-40.8V75h-187.4v156.1c0,27.4-18.3,40.8-40.9,40.8h-128.1v139.1c0,7.7,6.1,14,13.6,14h148.2c0-11,8.7-21.9,19.5-21.9h162.5c10.8,0,19.5,10.8,19.5,21.9h148.2c7.5,0,13.6-6.3,13.6-14v-139.1h-127.7ZM283.1,231.1V75h-132c-7.5,0-13.6,6.3-13.6,14v161h128.1c9.7,0,17.5-9,17.5-18.9Z"/>
        </svg>
      </a>
      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 shadow-[0_8px_30px_rgba(215,135,150,0.4)]">
        {['Work', 'Services', 'About', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white hover:bg-white/10 px-[clamp(20px,1.25vw,40px)] py-[clamp(10px,0.6vw,20px)] rounded-full transition-colors duration-300 font-sans font-medium text-[clamp(14px,0.88vw,34px)] tracking-wide [text-shadow:0_4px_12px_rgba(215,135,150,0.6)]"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
