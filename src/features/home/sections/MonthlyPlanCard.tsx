import { formatRub } from '@/features/portfolio/format'
import { monthlyProgress } from '@/features/portfolio/helpers'
import type { MonthlyPlan } from '@/features/portfolio/types'
import { Card } from '@/shared/ui/Card'

type MonthlyPlanCardProps = {
  plan: MonthlyPlan
}

export function MonthlyPlanCard({ plan }: MonthlyPlanCardProps) {
  const { percent } = monthlyProgress(plan)

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted">Цель месяца</p>
          <p className="mt-1 text-lg font-semibold text-text">{formatRub(plan.target)}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted">Уже внесено</p>
          <p className="mt-1 text-lg font-semibold text-text">
            {formatRub(plan.contributed)}
          </p>
        </div>
        <p className="pt-6 text-sm text-muted">{percent}%</p>
      </div>
    </Card>
  )
}
