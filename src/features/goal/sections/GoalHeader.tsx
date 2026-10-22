import { Link } from 'react-router'
import { paths } from '@/app/paths'
import { ChevronLeftIcon } from '@/shared/ui/icons'

type GoalHeaderProps = {
  title: string
}

export function GoalHeader({ title }: GoalHeaderProps) {
  return (
    <header className="flex items-center gap-2">
      <Link
        to={paths.home}
        aria-label="Назад"
        className="flex size-10 items-center justify-center text-text"
      >
        <ChevronLeftIcon />
      </Link>
      <h1 className="text-xl font-semibold tracking-tight text-text">{title}</h1>
    </header>
  )
}
