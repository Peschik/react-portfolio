import { useParams } from 'react-router'
import { usePortfolio } from '@/features/portfolio/usePortfolio'
import { PagePlaceholder } from '@/shared/ui/PagePlaceholder'

export function AccountPage() {
  const { accountId } = useParams()
  const { data } = usePortfolio()
  const account = data.accounts.find((item) => item.id === accountId)

  if (!account) {
    return (
      <PagePlaceholder
        title="Счёт не найден"
        description="Такого счёта в портфеле нет."
      />
    )
  }

  return (
    <PagePlaceholder
      title={account.name}
      description="Экран счёта соберём следующим шагом."
    />
  )
}
