import { formatRub } from '@/features/portfolio/format'
import { monthlyProgress } from '@/features/portfolio/helpers'
import type { MonthlyPlan } from '@/features/portfolio/types'
import { Card } from '@/shared/ui/Card'
import { Metric } from '@/shared/ui/Metric'

type MonthlyPlanCardProps = {
  plan: MonthlyPlan
}

export function MonthlyPlanCard({ plan }: MonthlyPlanCardProps) {
  const { percent } = monthlyProgress(plan)

  return (
    <Card className="flex items-start justify-between gap-3">
      <Metric label="Цель месяца">{formatRub(plan.target)}</Metric>
      <Metric label="Уже внесено" align="right">
        {formatRub(plan.contributed)}
      </Metric>
      <Metric label="Прогресс" align="right">
        {percent}%
      </Metric>
    </Card>
  )
}
