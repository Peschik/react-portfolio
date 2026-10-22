import { NavLink, Outlet } from 'react-router'
import { paths } from '@/app/paths'
import {
  AnalyticsIcon,
  AssetsIcon,
  HomeIcon,
  OperationsIcon,
  PlusIcon,
} from '@/shared/ui/icons'

const tabs = {
  home: { to: paths.home, label: 'Главная', end: true, icon: HomeIcon },
  assets: { to: paths.assets, label: 'Активы', end: false, icon: AssetsIcon },
  operations: { to: paths.operations, label: 'Операции', end: false, icon: OperationsIcon },
  analytics: { to: paths.analytics, label: 'Аналитика', end: false, icon: AnalyticsIcon },
} as const


export function AppShell() {
  return (
    <div className="min-h-dvh bg-canvas">
      <div className="mx-auto flex h-dvh max-w-phone flex-col bg-surface">
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

        <nav className="shrink-0 border-t border-line bg-surface px-2 pt-2 pb-nav-safe">
          <div className="grid grid-cols-5 items-end">
            <TabLink tab={tabs.home} />
            <TabLink tab={tabs.assets} />
            <AddButton />
            <TabLink tab={tabs.operations} />
            <TabLink tab={tabs.analytics} />
          </div>
        </nav>
      </div>
    </div>
  )
}

function TabLink({ tab }: { tab: (typeof tabs[keyof typeof tabs]) }) {
  const Icon = tab.icon

  return (
    <NavLink
      to={tab.to}
      end={tab.end}
      className="group flex flex-col items-center gap-1 pb-1 text-2xs leading-none text-muted aria-[current=page]:text-text"
    >
      <Icon />
      <span>{tab.label}</span>
      <span className="h-1 w-1 rounded-full bg-transparent group-aria-[current=page]:bg-accent" />
    </NavLink>
  )
}

function AddButton() {
  return (
    <div className="flex justify-center pb-1">
      <button
        type="button"
        aria-label="Добавить"
        className="flex h-12 w-12 -translate-y-3 items-center justify-center rounded-full bg-accent text-white shadow-fab"
      >
        <PlusIcon />
      </button>
    </div>
  )
}
