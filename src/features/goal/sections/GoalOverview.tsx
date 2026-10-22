import { formatMonthCount, formatRub } from '@/features/portfolio/format'
import { goalProgress, monthlyProgress, monthsToGoal } from '@/features/portfolio/helpers'
import type { Goal } from '@/features/portfolio/types'
import { Card } from '@/shared/ui/Card'
import { Metric } from '@/shared/ui/Metric'
import { ProgressRing } from '@/shared/ui/ProgressRing'

type GoalOverviewProps = {
  goal: Goal
}

export function GoalOverview({ goal }: GoalOverviewProps) {
  const { left, ratio, percent } = goalProgress(goal)
  const { percent: monthPercent } = monthlyProgress(goal.monthly)
  const months = monthsToGoal(goal)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center pt-2">
        <ProgressRing ratio={ratio} label={`${percent}%`} />
      </div>

      <dl className="grid grid-cols-3 gap-2 text-center text-sm">
        <Stat label="Цель" value={formatRub(goal.target)} />
        <Stat label="Накоплено" value={formatRub(goal.saved)} />
        <Stat label="Осталось" value={formatRub(left)} />
      </dl>

      <p className="text-center text-sm text-muted">
        До цели при текущем темпе — {formatMonthCount(months)}
      </p>

      <Card>
        <p className="text-sm text-muted">План на месяц</p>
        <div className="mt-3 flex items-start justify-between gap-3">
          <Metric label="Цель">{formatRub(goal.monthly.target)}</Metric>
          <Metric label="Уже внесено" align="right">
            {formatRub(goal.monthly.contributed)}
          </Metric>
          <Metric label="Прогресс" align="right">
            {monthPercent}%
          </Metric>
        </div>
      </Card>

      <button
        type="button"
        className="rounded-full bg-accent px-4 py-3 text-sm font-medium text-white"
      >
        Внести деньги
      </button>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="mt-1 font-medium text-text">{value}</dd>
    </div>
  )
}
