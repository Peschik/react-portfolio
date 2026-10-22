import { Link } from 'react-router'
import { goalPath } from '@/app/paths'
import { formatRub } from '@/features/portfolio/format'
import { goalProgress } from '@/features/portfolio/helpers'
import type { Goal } from '@/features/portfolio/types'
import { ProgressRing } from '@/features/home/sections/ProgressRing'
import { Card } from '@/shared/ui/Card'

type GoalCardProps = {
  goal: Goal
}

export function GoalCard({ goal }: GoalCardProps) {
  const { left, ratio, percent } = goalProgress(goal)

  return (
    <Link to={goalPath(goal.id)} className="block">
      <Card>
        <p className="text-sm text-muted">Цель — {goal.title}</p>
        <div className="mt-3 flex items-center gap-4">
          <ProgressRing ratio={ratio} label={`${percent}%`} />
          <dl className="grid flex-1 grid-cols-1 gap-2 text-sm">
            <Row label="Цель" value={formatRub(goal.target)} />
            <Row label="Накоплено" value={formatRub(goal.saved)} />
            <Row label="Осталось" value={formatRub(left)} />
          </dl>
        </div>
      </Card>
    </Link>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium text-text">{value}</dd>
    </div>
  )
}
