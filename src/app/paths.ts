export const paths = {
  home: '/',
  assets: '/assets',
  operations: '/operations',
  analytics: '/analytics',
  goal: '/goals/:goalId',
  account: '/accounts/:accountId',
} as const

export function goalPath(goalId: string) {
  return `/goals/${goalId}`
}

export function accountPath(accountId: string) {
  return `/accounts/${accountId}`
}
