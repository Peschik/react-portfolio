import { isSameDay } from '@/shared/utils'
import type { Operation, OperationType } from '@/features/portfolio/types'

const operationLabels: Record<OperationType, string> = {
  goalContribution: 'Взнос на цель',
  dividend: 'Дивиденды',
  buy: 'Покупка',
  sell: 'Продажа',
  deposit: 'Пополнение',
}

export function getOperationTypeLabel(type: OperationType) {
  return operationLabels[type]
}

export function groupOperationsByDay(operations: Operation[], now = new Date()) {
  const sorted = [...operations].sort((a, b) => b.at.localeCompare(a.at))
  const buckets = new Map<string, Operation[]>()

  for (const operation of sorted) {
    const key = dayKey(new Date(operation.at))
    const bucket = buckets.get(key)
    if (bucket) bucket.push(operation)
    else buckets.set(key, [operation])
  }

  return [...buckets.entries()].map(([key, items]) => ({
    key,
    label: dayLabel(new Date(items[0].at), now),
    operations: items,
  }))
}

function dayKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

function dayLabel(date: Date, now: Date) {
  if (isSameDay(date, now)) return 'Сегодня'
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  if (isSameDay(date, yesterday)) return 'Вчера'
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  }).format(date)
}

