import { assetTypeList } from '@/shared/types'
import type { Asset, AssetAllocation, Goal, MonthlyPlan, Operation } from '@/features/portfolio/types'
import { isSameDay } from '@/shared/utils'
import { countTotalValue } from '@/shared/utils/assets'

export { assetTypeList }

export function getGoalProgress(goal: Goal) {
  const left = Math.max(0, goal.target - goal.saved)
  const ratio = goal.target <= 0 ? 0 : Math.min(1, goal.saved / goal.target)
  return { left, ratio, percent: Math.round(ratio * 100) }
}

export function getMonthlyProgress(plan: MonthlyPlan) {
  const ratio = plan.target <= 0 ? 0 : Math.min(1, plan.contributed / plan.target)
  return { ratio, percent: Math.round(ratio * 100) }
}

export function getMonthsToGoal(goal: Goal) {
  const { left } = getGoalProgress(goal)
  if (left <= 0 || goal.monthly.target <= 0) return 0
  return Math.ceil(left / goal.monthly.target)
}

export function getGreetingPrefix(now = new Date()) {
  const hour = now.getHours()
  if (hour < 6) return 'Доброй ночи'
  if (hour < 12) return 'Доброе утро'
  if (hour < 18) return 'Добрый день'
  return 'Добрый вечер'
}

export function getAllocationByType(assets: Asset[]): AssetAllocation[] {
  const total = countTotalValue(assets)
  return assetTypeList.map((type) => {
    const value = countTotalValue(assets.filter((asset) => asset.type === type))
    return {
      type,
      value,
      share: total <= 0 ? 0 : value / total,
    }
  })
}

export function getPortfolioDayChange(operations: Operation[], now = new Date()) {
  return operations
    .filter((operation) => isSameDay(new Date(operation.at), now))
    .reduce((sum, operation) => sum + operation.amount, 0)
}

export function getPortfolioDayChangePct(total: number, dayChange: number) {
  if (total <= 0) return 0
  return (dayChange / total) * 100
}
