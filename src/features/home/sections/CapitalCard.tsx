import { Link } from 'react-router'
import { paths } from '@/app/paths'
import { formatRub, formatSignedPct, formatSignedRub } from '@/features/portfolio/format'
import { Sparkline } from '@/features/home/sections/Sparkline'
import { cn } from '@/shared/lib/cn'

type CapitalCardProps = {
  total: number
  dayChange: number
  dayChangePct: number
  sparkline: number[]
}

export function CapitalCard({
  total,
  dayChange,
  dayChangePct,
  sparkline,
}: CapitalCardProps) {
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
      <div className="mt-1 flex items-center justify-between gap-3">
        <p className={cn('text-sm', positive ? 'text-plus' : 'text-minus')}>
          {formatSignedRub(dayChange)} ({formatSignedPct(dayChangePct)}) сегодня
        </p>
        <span className={positive ? 'text-plus' : 'text-minus'}>
          <Sparkline values={sparkline} />
        </span>
      </div>
    </section>
  )
}
