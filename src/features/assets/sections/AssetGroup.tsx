import { formatRub, formatSignedPct } from '@/features/portfolio/format'
import { getAssetTypeLabel, totalAssetValue } from '@/shared/utils/assets'
import type { Asset, AssetType } from '@/features/portfolio/types'
import { Card } from '@/shared/ui/Card'
import { cn } from '@/shared/lib/cn'

type AssetGroupProps = {
  type: AssetType
  assets: Asset[]
}

export function AssetGroup({ type, assets }: AssetGroupProps) {
  const total = totalAssetValue(assets)

  return (
    <section>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h2 className="text-sm text-muted">{getAssetTypeLabel(type)}</h2>
        <p className="text-sm font-medium text-text">{formatRub(total)}</p>
      </div>
      <Card className="divide-y divide-line p-0">
        {assets.map((asset) => (
          <AssetRow key={asset.id} asset={asset} />
        ))}
      </Card>
    </section>
  )
}

function AssetRow({ asset }: { asset: Asset }) {
  const positive = asset.monthChangePct >= 0

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3">
      <div className="min-w-0">
        <p className="truncate text-sm text-text">{asset.name}</p>
        <p className="text-sm font-medium text-text">{formatRub(asset.value)}</p>
      </div>
      <p className={cn('shrink-0 text-sm', positive ? 'text-plus' : 'text-minus')}>
        {formatSignedPct(asset.monthChangePct)}
      </p>
    </div>
  )
}
