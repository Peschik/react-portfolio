import { useParams } from 'react-router'
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

  return (
    <PagePlaceholder
      title={goal.title}
      description="Экран цели соберём следующим шагом."
    />
  )
}
