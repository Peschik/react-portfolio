import { BellIcon } from '@/shared/ui/icons'
import { formatUpdatedAt } from '@/features/portfolio/format'
import { greetingPrefix } from '@/features/portfolio/helpers'

type HomeHeaderProps = {
  name: string
  updatedAt: string
}

export function HomeHeader({ name, updatedAt }: HomeHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-text">
          {greetingPrefix()}, {name}!
        </h1>
        <p className="mt-1 text-sm text-muted">{formatUpdatedAt(updatedAt)}</p>
      </div>
      <button
        type="button"
        aria-label="Уведомления"
        className="flex size-10 items-center justify-center rounded-full text-muted"
      >
        <BellIcon />
      </button>
    </header>
  )
}
