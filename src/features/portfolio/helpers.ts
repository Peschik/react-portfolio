import type { AssetType, Goal, MonthlyPlan } from '@/features/portfolio/types'

export function goalProgress(goal: Goal) {
  const left = Math.max(0, goal.target - goal.saved)
  const ratio = goal.target <= 0 ? 0 : Math.min(1, goal.saved / goal.target)
  return { left, ratio, percent: Math.round(ratio * 100) }
}

export function monthlyProgress(plan: MonthlyPlan) {
  const ratio = plan.target <= 0 ? 0 : Math.min(1, plan.contributed / plan.target)
  return { ratio, percent: Math.round(ratio * 100) }
}

const assetLabels: Record<AssetType, string> = {
  gold: 'Золото',
  stocks: 'Акции',
  fx: 'Валюта',
  cash: 'Кэш',
  commercialEstate: 'Коммерческая недвижимость',
}

export function formatAssetType(type: AssetType) {
  return assetLabels[type]
}

export function greetingPrefix(now = new Date()) {
  const hour = now.getHours()
  if (hour < 6) return 'Доброй ночи'
  if (hour < 12) return 'Доброе утро'
  if (hour < 18) return 'Добрый день'
  return 'Добрый вечер'
}
