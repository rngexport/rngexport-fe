const marqueeItems = [
  'TURNKEY SOLUTIONS',
  'FIBER PROCESSING',
  'AUTOMATION',
  'R&D ENGINEERING',
  'GLOBAL LOGISTICS',
  'SUSTAINABLE ENERGY',
]

export default function HomeMarquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="bg-neutral-900 text-white py-4 overflow-hidden border-y border-neutral-800">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8 px-4">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">{item}</span>
            <span className="text-neutral-600 text-xs">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}

