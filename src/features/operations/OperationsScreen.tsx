import { groupOperationsByDay } from '@/features/operations/helpers'
import { OperationDayGroup } from '@/features/operations/sections/OperationDayGroup'
import { OperationsHeader } from '@/features/operations/sections/OperationsHeader'
import { usePortfolio } from '@/features/portfolio/usePortfolio'

export function OperationsScreen() {
  const { data } = usePortfolio()
  const groups = groupOperationsByDay(data.operations)

  return (
    <div className="flex flex-col gap-5 px-5 pt-6 pb-6">
      <OperationsHeader />
      {groups.length === 0 ? (
        <p className="text-sm text-muted">Нет операций</p>
      ) : (
        groups.map((group) => (
          <OperationDayGroup
            key={group.key}
            label={group.label}
            operations={group.operations}
          />
        ))
      )}
    </div>
  )
}
