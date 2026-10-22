import { assetTypeList, totalAssetValue } from '@/features/portfolio/helpers'
import type { Asset } from '@/features/portfolio/types'

export function assetsMonthChangePct(assets: Asset[]) {
  const total = totalAssetValue(assets)
  if (total <= 0) return 0
  return assets.reduce(
    (sum, asset) => sum + asset.monthChangePct * (asset.value / total),
    0,
  )
}

export function groupAssetsByType(assets: Asset[]) {
  return assetTypeList
    .map((type) => ({
      type,
      assets: assets.filter((asset) => asset.type === type),
    }))
    .filter((group) => group.assets.length > 0)
}
