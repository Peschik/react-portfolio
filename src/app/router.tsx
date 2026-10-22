import { createBrowserRouter } from 'react-router'
import { paths } from '@/app/paths'
import { AppShell } from '@/layouts/AppShell'
import { AccountPage } from '@/pages/AccountPage'
import { AnalyticsPage } from '@/pages/AnalyticsPage'
import { AssetsPage } from '@/pages/AssetsPage'
import { GoalPage } from '@/pages/GoalPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { OperationsPage } from '@/pages/OperationsPage'

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: paths.assets, element: <AssetsPage /> },
      { path: paths.operations, element: <OperationsPage /> },
      { path: paths.analytics, element: <AnalyticsPage /> },
      { path: paths.goal, element: <GoalPage /> },
      { path: paths.account, element: <AccountPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
