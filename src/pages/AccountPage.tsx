import { useParams } from 'react-router'
import { AccountScreen } from '@/features/account/AccountScreen'
import { assetsByAccount } from '@/features/account/helpers'
import { usePortfolio } from '@/features/portfolio/usePortfolio'
import { PagePlaceholder } from '@/shared/ui/PagePlaceholder'

export function AccountPage() {
  const { accountId } = useParams()
  const { data } = usePortfolio()
  const account = data.accounts.find((item) => item.id === accountId)

  if (!account || !accountId) {
    return (
      <PagePlaceholder
        title="Счёт не найден"
        description="Такого счёта в портфеле нет."
      />
    )
  }

  return (
    <AccountScreen
      account={account}
      assets={assetsByAccount(data.assets, accountId)}
    />
  )
}
