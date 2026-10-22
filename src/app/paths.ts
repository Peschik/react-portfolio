export const paths = {
  home: '/',
  assets: '/assets',
  operations: '/operations',
  analytics: '/analytics',
  goal: '/goals/:goalId',
  account: '/accounts/:accountId',
} as const

export function getGoalPath(goalId: string) {
  return `/goals/${goalId}`
}

export function getAccountPath(accountId: string) {
  return `/accounts/${accountId}`
}
