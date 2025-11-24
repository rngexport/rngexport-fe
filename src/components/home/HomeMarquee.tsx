import { useTranslation } from 'react-i18next'

const fallbackItems = [
  'TURNKEY SOLUTIONS',
  'FIBER PROCESSING',
  'AUTOMATION',
  'R&D ENGINEERING',
  'GLOBAL LOGISTICS',
  'SUSTAINABLE ENERGY',
]

export default function HomeMarquee() {
  const { t } = useTranslation()
  const itemsFromI18n = t('marquee.items', { returnObjects: true }) as string[] | string
  const baseItems = Array.isArray(itemsFromI18n) && itemsFromI18n.length > 0 ? itemsFromI18n : fallbackItems
  const items = [...baseItems, ...baseItems]
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

