import type { Asset, AssetType } from '@/features/portfolio/types'

const assetLabels: Record<AssetType, string> = {
  gold: 'Золото',
  stocks: 'Акции',
  fx: 'Валюта',
  cash: 'Кэш',
  commercialEstate: 'Коммерческая недвижимость',
}

export function getAssetTypeLabel(type: AssetType) {
  return assetLabels[type]
}

export function totalAssetValue(assets: Asset[]) {
  return assets.reduce((sum, asset) => sum + asset.value, 0)
}
