import { Link } from 'react-router'
import { accountPath, paths } from '@/app/paths'
import { assetsByAccount } from '@/features/account/helpers'
import { formatRub, formatSignedPct } from '@/features/portfolio/format'
import { totalAssetValue } from '@/features/portfolio/helpers'
import type { Account, Asset } from '@/features/portfolio/types'
import { Card } from '@/shared/ui/Card'
import { ChevronRightIcon } from '@/shared/ui/icons'
import { cn } from '@/shared/lib/cn'

type AccountsCardProps = {
  accounts: Account[]
  assets: Asset[]
}

export function AccountsCard({ accounts, assets }: AccountsCardProps) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted">Счета</h2>
        <Link to={paths.assets} className="text-sm text-muted">
          Смотреть все
        </Link>
      </div>
      <Card className="mt-3 divide-y divide-line p-0">
        {accounts.map((account) => (
          <AccountRow key={account.id} account={account} assets={assets} />
        ))}
      </Card>
    </section>
  )
}

function AccountRow({
  account,
  assets,
}: {
  account: Account
  assets: Asset[]
}) {
  const positive = account.dayChangePct >= 0
  const balance = totalAssetValue(assetsByAccount(assets, account.id))

  return (
    <Link
      to={accountPath(account.id)}
      className="flex items-center gap-3 px-4 py-3"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-line text-sm font-medium text-text">
        {account.name.slice(0, 1)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm text-text">{account.name}</span>
        <span className="block text-sm font-medium text-text">
          {formatRub(balance)}
        </span>
      </span>
      <span
        className={cn(
          'text-sm',
          positive ? 'text-plus' : 'text-minus',
        )}
      >
        {formatSignedPct(account.dayChangePct)}
      </span>
      <span className="text-muted">
        <ChevronRightIcon />
      </span>
    </Link>
  )
}
