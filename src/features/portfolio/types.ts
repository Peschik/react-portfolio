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
  accountId: string
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
  dayChangePct: number
}

export const OperationType = {
  goalContribution: 'goalContribution',
  dividend: 'dividend',
  buy: 'buy',
  sell: 'sell',
  deposit: 'deposit',
} as const

export type OperationType = (typeof OperationType)[keyof typeof OperationType]

type OperationBase = {
  id: string
  amount: number
  at: string
}

export type GoalContributionOperation = OperationBase & {
  type: typeof OperationType.goalContribution
  data: { goalId: string }
}

export type DepositOperation = OperationBase & {
  type: typeof OperationType.deposit
  data: { accountId: string }
}

export type DividendOperation = OperationBase & {
  type: typeof OperationType.dividend
  data: { assetId: number }
}

export type BuyOperation = OperationBase & {
  type: typeof OperationType.buy
  data: { assetId: number }
}

export type SellOperation = OperationBase & {
  type: typeof OperationType.sell
  data: { assetId: number }
}

export type Operation =
  | GoalContributionOperation
  | DepositOperation
  | DividendOperation
  | BuyOperation
  | SellOperation

export type Portfolio = {
  greetingName: string
  updatedAt: string
  goals: Goal[]
  monthly: MonthlyPlan
  assets: Asset[]
  accounts: Account[]
  operations: Operation[]
}
