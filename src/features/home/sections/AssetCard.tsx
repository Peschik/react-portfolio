import { formatShare } from '@/features/portfolio/format'
import { getAssetTypeLabel } from '@/features/portfolio/helpers'
import { type AssetAllocation, type AssetType } from '@/features/portfolio/types'
import { Card } from '@/shared/ui/Card'

const assetView: Record<AssetType, { color: string; dot: string }> = {
  gold: { color: 'var(--color-alloc-gold)', dot: 'bg-alloc-gold' },
  stocks: { color: 'var(--color-alloc-stocks)', dot: 'bg-alloc-stocks' },
  fx: { color: 'var(--color-alloc-fx)', dot: 'bg-alloc-fx' },
  cash: { color: 'var(--color-alloc-cash)', dot: 'bg-alloc-cash' },
  commercialEstate: { color: 'var(--color-alloc-estate)', dot: 'bg-alloc-estate' },
}

type AssetCardProps = {
  allocation: AssetAllocation[]
}

export function AssetCard({ allocation }: AssetCardProps) {
  const stops = allocation.map((slice, index) => {
    const start = allocation.slice(0, index).reduce((sum, item) => sum + item.share, 0)
    const end = start + slice.share
    return `${assetView[slice.type].color} ${start * 100}% ${end * 100}%`
  })

  return (
    <section>
      <h2 className="text-sm text-muted">Распределение портфеля</h2>
      <Card className="mt-3 flex items-center gap-5">
        <div
          className="relative size-24 shrink-0 rounded-full"
          style={{ background: `conic-gradient(${stops.join(', ')})` }}
          aria-hidden
        >
          <div className="absolute inset-3 rounded-full bg-card" />
        </div>
        <ul className="flex flex-1 flex-col gap-2 text-sm">
          {allocation.map((slice) => (
            <li key={slice.type} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-muted">
                <span className={`size-2 rounded-full ${assetView[slice.type].dot}`} />
                {getAssetTypeLabel(slice.type)}
              </span>
              <span className="text-text">{formatShare(slice.share)}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
