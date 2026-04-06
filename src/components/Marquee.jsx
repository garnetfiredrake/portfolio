import Star from './Star';

export default function Marquee() {
  const words = ["UX RESEARCH", "UI DESIGN", "PROTOTYPING", "BRAND IDENTITY", "DESIGN SYSTEMS"];
  const list = [...words, ...words, ...words, ...words, ...words, ...words];
  
  return (
    <section className="relative z-10 w-full overflow-hidden border-y border-white/20 bg-white/5 backdrop-blur-md py-[clamp(12px,1vw,24px)] flex items-center">
      <div className="flex items-center w-fit animate-marquee">
        {list.map((word, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            <span className="font-serif italic text-white/95 text-[22px] leading-none pb-[7px]">
              {word.toLowerCase()}
            </span>
            <span className="mx-[clamp(32px,3vw,100px)] text-white flex items-center justify-center">
              <Star className="w-[18px] h-[18px]" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
