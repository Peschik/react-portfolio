import { Link } from 'react-router'
import { paths } from '@/app/paths'

export function NotFoundPage() {
  return (
    <div className="min-h-dvh bg-canvas">
      <div className="mx-auto flex h-dvh max-w-phone flex-col bg-surface px-5 pt-16">
        <h1 className="text-2xl font-semibold tracking-tight text-text">
          Страница не найдена
        </h1>
        <p className="mt-2 text-base leading-relaxed text-muted">
          Такого маршрута нет. Вернитесь на главную.
        </p>
        <Link
          to={paths.home}
          className="mt-6 self-start rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
        >
          На главную
        </Link>
      </div>
    </div>
  )
}
