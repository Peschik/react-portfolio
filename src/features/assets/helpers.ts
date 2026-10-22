import { assetTypeList } from '@/features/portfolio/helpers'
import { countTotalValue } from '@/shared/utils/assets'
import type { Asset } from '@/features/portfolio/types'

export function getAssetsMonthChangePct(assets: Asset[]) {
  const total = countTotalValue(assets)
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
