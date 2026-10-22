import { Link } from 'react-router'
import { paths } from '@/app/paths'
import { formatRub, formatSignedPct } from '@/features/portfolio/format'
import { ChevronLeftIcon } from '@/shared/ui/icons'
import { cn } from '@/shared/lib/cn'

type AccountHeaderProps = {
  name: string
  total: number
  dayChangePct: number
}

export function AccountHeader({ name, total, dayChangePct }: AccountHeaderProps) {
  const positive = dayChangePct >= 0

  return (
    <header>
      <div className="flex items-center gap-2">
        <Link
          to={paths.home}
          aria-label="Назад"
          className="flex size-10 items-center justify-center text-text"
        >
          <ChevronLeftIcon />
        </Link>
        <h1 className="text-xl font-semibold tracking-tight text-text">{name}</h1>
      </div>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-text">
        {formatRub(total)}
      </p>
      <p className={cn('mt-1 text-sm', positive ? 'text-plus' : 'text-minus')}>
        {formatSignedPct(dayChangePct)} за день
      </p>
    </header>
  )
}
