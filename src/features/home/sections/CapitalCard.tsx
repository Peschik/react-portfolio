import { Link } from 'react-router'
import { paths } from '@/app/paths'
import { formatRub, formatSignedPct, formatSignedRub } from '@/features/portfolio/format'
import { cn } from '@/shared/lib/cn'

type CapitalCardProps = {
  total: number
  dayChange: number
  dayChangePct: number
}

export function CapitalCard({ total, dayChange, dayChangePct }: CapitalCardProps) {
  const positive = dayChange >= 0

  return (
    <section>
      <div className="flex items-center justify-between text-sm text-muted">
        <span>Семейный капитал</span>
        <Link to={paths.assets} className="text-muted">
          Все счета
        </Link>
      </div>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-text">
        {formatRub(total)}
      </p>
      <p className={cn('mt-1 text-sm', positive ? 'text-plus' : 'text-minus')}>
        {formatSignedRub(dayChange)} ({formatSignedPct(dayChangePct)}) сегодня
      </p>
    </section>
  )
}
