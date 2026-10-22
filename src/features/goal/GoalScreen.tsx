import { useState } from 'react'
import { GoalHeader } from '@/features/goal/sections/GoalHeader'
import { GoalOverview } from '@/features/goal/sections/GoalOverview'
import type { Goal } from '@/features/portfolio/types'
import { cn } from '@/shared/lib/cn'

const tabs = [
  { id: 'overview', label: 'Обзор' },
  { id: 'history', label: 'История' },
  { id: 'plan', label: 'План' },
] as const

type TabId = (typeof tabs)[number]['id']

type GoalScreenProps = {
  goal: Goal
}

export function GoalScreen({ goal }: GoalScreenProps) {
  const [tab, setTab] = useState<TabId>('overview')

  return (
    <div className="flex flex-col gap-5 px-5 pt-4 pb-6">
      <GoalHeader title={goal.title} />

      <div className="flex border-b border-line">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={cn(
              '-mb-px flex-1 pb-2 text-sm',
              tab === item.id
                ? 'border-b-2 border-accent text-text'
                : 'text-muted',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === 'overview' ? (
        <GoalOverview goal={goal} />
      ) : (
        <p className="pt-6 text-sm text-muted">
          {tab === 'history'
            ? 'История взносов появится позже.'
            : 'План пополнений появится позже.'}
        </p>
      )}
    </div>
  )
}
