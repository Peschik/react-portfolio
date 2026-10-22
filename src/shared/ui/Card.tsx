import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('rounded-2xl bg-card p-4', className)}>{children}</div>
  )
}
