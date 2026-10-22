import type { Asset } from '@/features/portfolio/types'

export function getAssetsByAccount(assets: Asset[], accountId: string) {
  return assets.filter((asset) => asset.accountId === accountId)
}
