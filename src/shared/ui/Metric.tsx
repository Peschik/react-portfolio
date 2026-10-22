import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

type MetricProps = {
  label: string
  children: ReactNode
  align?: 'left' | 'right'
}

export function Metric({ label, children, align = 'left' }: MetricProps) {
  return (
    <div className={cn(align === 'right' && 'text-right')}>
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-semibold text-text">{children}</p>
    </div>
  )
}
