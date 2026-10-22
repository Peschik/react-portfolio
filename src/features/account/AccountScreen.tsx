import { AccountHeader } from '@/features/account/sections/AccountHeader'
import { groupAssetsByType } from '@/features/assets/helpers'
import { AssetGroup } from '@/features/assets/sections/AssetGroup'
import { totalAssetValue } from '@/shared/utils/assets'
import type { Account, Asset } from '@/features/portfolio/types'

type AccountScreenProps = {
  account: Account
  assets: Asset[]
}

export function AccountScreen({ account, assets }: AccountScreenProps) {
  const groups = groupAssetsByType(assets)

  return (
    <div className="flex flex-col gap-5 px-5 pt-4 pb-6">
      <AccountHeader
        name={account.name}
        total={totalAssetValue(assets)}
        dayChangePct={account.dayChangePct}
      />
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
