import { formatRub, formatSignedPct } from '@/features/portfolio/format'
import { cn } from '@/shared/lib/cn'

type AssetsHeaderProps = {
  total: number
  monthChangePct: number
}

export function AssetsHeader({ total, monthChangePct }: AssetsHeaderProps) {
  const positive = monthChangePct >= 0

  return (
    <header>
      <h1 className="text-2xl font-semibold tracking-tight text-text">Активы</h1>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-text">
        {formatRub(total)}
      </p>
      <p className={cn('mt-1 text-sm', positive ? 'text-plus' : 'text-minus')}>
        {formatSignedPct(monthChangePct)} за месяц
      </p>
    </header>
  )
}
