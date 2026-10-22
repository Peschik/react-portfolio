import { useParams } from 'react-router'
import { GoalScreen } from '@/features/goal/GoalScreen'
import { usePortfolio } from '@/features/portfolio/usePortfolio'
import { PagePlaceholder } from '@/shared/ui/PagePlaceholder'

export function GoalPage() {
  const { goalId } = useParams()
  const { data } = usePortfolio()
  const goal = data.goals.find((item) => item.id === goalId)

  if (!goal) {
    return (
      <PagePlaceholder
        title="Цель не найдена"
        description="Такой цели в портфеле нет."
      />
    )
  }

  return <GoalScreen goal={goal} />
}
