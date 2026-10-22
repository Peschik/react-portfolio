import type { Asset } from '@/features/portfolio/types'

export function assetsByAccount(assets: Asset[], accountId: string) {
  return assets.filter((asset) => asset.accountId === accountId)
}
