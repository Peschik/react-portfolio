const integer = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 })
const signedPct = new Intl.NumberFormat('ru-RU', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
const sharePct = new Intl.NumberFormat('ru-RU', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

export function formatRub(value: number) {
  return `${integer.format(value)}\u00A0₽`
}

export function formatSignedRub(value: number) {
  const sign = value > 0 ? '+' : value < 0 ? '−' : ''
  return `${sign}${integer.format(Math.abs(value))}\u00A0₽`
}

export function formatSignedPct(points: number) {
  const sign = points > 0 ? '+' : points < 0 ? '−' : ''
  return `${sign}${signedPct.format(Math.abs(points))}%`
}

export function formatShare(ratio: number) {
  return sharePct.format(ratio)
}

export function formatMonthCount(count: number) {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod10 === 1 && mod100 !== 11) return `${count} месяц`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return `${count} месяца`
  }
  return `${count} месяцев`
}

export function formatUpdatedAt(iso: string, now = new Date()) {
  const date = new Date(iso)
  const time = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
  const sameDay = date.toDateString() === now.toDateString()
  if (sameDay) return `Обновлено сегодня, ${time}`
  const day = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  }).format(date)
  return `Обновлено ${day}, ${time}`
}
