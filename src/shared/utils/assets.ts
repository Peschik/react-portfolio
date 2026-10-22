import { type AssetType } from '@/shared/types'

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

export function countTotalValue<T extends { value: number }>(items: T[]) {
  return items.reduce((sum, item) => sum + item.value, 0)
}
