import { useRef } from 'react'
import { assetTypeList } from '@/features/portfolio/helpers'
import { getAssetTypeLabel } from '@/shared/utils/assets'
import type { AssetType } from '@/features/portfolio/types'
import { cn } from '@/shared/lib/cn'

export type AssetFilter = 'all' | AssetType

type AssetsFiltersProps = {
  value: AssetFilter
  onChange: (value: AssetFilter) => void
}

export function AssetsFilters({ value, onChange }: AssetsFiltersProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollToChip = (currentChip: HTMLElement) => {
    currentChip.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }

  return (
    <div ref={scrollerRef} className="flex gap-2 overflow-x-auto scrollbar-none">
      <FilterChip label="Все" active={value === 'all'} onClick={() => onChange('all')} />
      {assetTypeList.map((type) => (
        <FilterChip
          key={type}
          label={getAssetTypeLabel(type)}
          active={value === type}
          onClick={(event) => {
            onChange(type)
            scrollToChip(event.currentTarget)
          }}
        />
      ))}
    </div>
  )
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'shrink-0 rounded-full px-3 py-1.5 text-sm',
        active ? 'bg-accent text-white' : 'bg-card text-muted',
      )}
    >
      {label}
    </button>
  )
}
