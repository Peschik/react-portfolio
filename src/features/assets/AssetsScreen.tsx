import { useState } from 'react'
import { AssetGroup } from '@/features/assets/sections/AssetGroup'
import {
  AssetsFilters,
  type AssetFilter,
} from '@/features/assets/sections/AssetsFilters'
import { AssetsHeader } from '@/features/assets/sections/AssetsHeader'
import { assetsMonthChangePct, groupAssetsByType } from '@/features/assets/helpers'
import { totalAssetValue } from '@/shared/utils/assets'
import { usePortfolio } from '@/features/portfolio/usePortfolio'

export function AssetsScreen() {
  const { data } = usePortfolio()
  const [filter, setFilter] = useState<AssetFilter>('all')

  const visible =
    filter === 'all'
      ? data.assets
      : data.assets.filter((asset) => asset.type === filter)
  const groups = groupAssetsByType(visible)

  return (
    <div className="flex flex-col gap-5 px-5 pt-6 pb-6">
      <AssetsHeader
        total={totalAssetValue(visible)}
        monthChangePct={assetsMonthChangePct(visible)}
      />
      <AssetsFilters value={filter} onChange={setFilter} />
      {groups.length === 0 ? (
        <p className="text-sm text-muted">Нет активов</p>
      ) : (
        groups.map((group) => (
          <AssetGroup key={group.type} type={group.type} assets={group.assets} />
        ))
      )}
    </div>
  )
}
