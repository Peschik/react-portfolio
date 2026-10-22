import { getOperationTypeLabel } from '@/features/operations/helpers'
import { formatSignedRub } from '@/features/portfolio/format'
import type { Operation } from '@/features/portfolio/types'
import { Card } from '@/shared/ui/Card'
import { cn } from '@/shared/lib/cn'

type OperationDayGroupProps = {
  label: string
  operations: Operation[]
}

export function OperationDayGroup({ label, operations }: OperationDayGroupProps) {
  return (
    <section>
      <h2 className="mb-2 text-sm text-muted">{label}</h2>
      <Card className="divide-y divide-line p-0">
        {operations.map((operation) => (
          <OperationRow key={operation.id} operation={operation} />
        ))}
      </Card>
    </section>
  )
}

function OperationRow({ operation }: { operation: Operation }) {
  const positive = operation.amount >= 0

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3">
      <p className="min-w-0 truncate text-sm text-text">
        {getOperationTypeLabel(operation.type)}
      </p>
      <p className={cn('shrink-0 text-sm font-medium', positive ? 'text-plus' : 'text-minus')}>
        {formatSignedRub(operation.amount)}
      </p>
    </div>
  )
}
