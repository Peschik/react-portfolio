import { AssetType, type Asset, type AssetAllocation, type Goal, type MonthlyPlan, type Operation } from '@/features/portfolio/types'
import { isSameDay } from '@/shared/utils'
import { totalAssetValue } from '@/shared/utils/assets'

export const assetTypeList = [
  AssetType.gold,
  AssetType.stocks,
  AssetType.fx,
  AssetType.cash,
  AssetType.commercialEstate,
] as const

export function goalProgress(goal: Goal) {
  const left = Math.max(0, goal.target - goal.saved)
  const ratio = goal.target <= 0 ? 0 : Math.min(1, goal.saved / goal.target)
  return { left, ratio, percent: Math.round(ratio * 100) }
}

export function monthlyProgress(plan: MonthlyPlan) {
  const ratio = plan.target <= 0 ? 0 : Math.min(1, plan.contributed / plan.target)
  return { ratio, percent: Math.round(ratio * 100) }
}

export function monthsToGoal(goal: Goal) {
  const { left } = goalProgress(goal)
  if (left <= 0 || goal.monthly.target <= 0) return 0
  return Math.ceil(left / goal.monthly.target)
}

export function greetingPrefix(now = new Date()) {
  const hour = now.getHours()
  if (hour < 6) return 'Доброй ночи'
  if (hour < 12) return 'Доброе утро'
  if (hour < 18) return 'Добрый день'
  return 'Добрый вечер'
}

export function allocationByType(assets: Asset[]): AssetAllocation[] {
  const total = totalAssetValue(assets)
  return assetTypeList.map((type) => {
    const value = totalAssetValue(assets.filter((asset) => asset.type === type))
    return {
      type,
      value,
      share: total <= 0 ? 0 : value / total,
    }
  })
}

export function portfolioDayChange(operations: Operation[], now = new Date()) {
  return operations
    .filter((operation) => isSameDay(new Date(operation.at), now))
    .reduce((sum, operation) => sum + operation.amount, 0)
}

export function portfolioDayChangePct(total: number, dayChange: number) {
  if (total <= 0) return 0
  return (dayChange / total) * 100
}

