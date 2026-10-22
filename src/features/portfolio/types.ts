export type MonthlyPlan = {
  target: number
  contributed: number
}

export type Goal = {
  id: string
  title: string
  target: number
  saved: number
  monthly: MonthlyPlan
}

export const AssetType = {
  gold: 'gold',
  stocks: 'stocks',
  fx: 'fx',
  cash: 'cash',
  commercialEstate: 'commercialEstate',
} as const

export type AssetType = (typeof AssetType)[keyof typeof AssetType]

export type Asset = {
  id: number
  type: AssetType
  name: string
  value: number
  monthChangePct: number
}

export type AssetAllocation = {
  type: AssetType
  value: number
  share: number
}

export type Account = {
  id: string
  name: string
  balance: number
  dayChangePct: number
}

export type Portfolio = {
  greetingName: string
  updatedAt: string
  total: number
  dayChange: number
  dayChangePct: number
  goals: Goal[]
  monthly: MonthlyPlan
  assets: Asset[]
  accounts: Account[]
}
