import { AssetType, OperationType, type Portfolio } from '@/features/portfolio/types'

function atDaysAgo(days: number, hours: number, minutes: number) {
  const date = new Date()
  date.setDate(date.getDate() - days)
  date.setHours(hours, minutes, 0, 0)
  return date.toISOString()
}

function todayAt(hours: number, minutes: number) {
  return atDaysAgo(0, hours, minutes)
}

export const mockPortfolio: Portfolio = {
  greetingName: 'Влад',
  updatedAt: todayAt(9, 41),
  goals: [
    {
      id: 'apartment',
      title: 'Квартира',
      target: 16_000_000,
      saved: 11_548_460,
      monthly: {
        target: 350_000,
        contributed: 50_050,
      },
    },
  ],
  monthly: {
    target: 350_000,
    contributed: 50_050,
  },
  assets: [
    { id: 1, type: AssetType.gold, accountId: 'vtb', name: 'Золото (слитки)', value: 4_810_905, monthChangePct: 2.15 },
    { id: 2, type: AssetType.gold, accountId: 'tinkoff', name: 'Монеты', value: 302_000, monthChangePct: 1.4 },
    { id: 3, type: AssetType.gold, accountId: 'alfa', name: 'Обезл. металл, счета', value: 111_000, monthChangePct: 0.8 },
    { id: 4, type: AssetType.stocks, accountId: 'sber', name: 'Сбербанк', value: 1_234_890, monthChangePct: 4.26 },
    { id: 5, type: AssetType.stocks, accountId: 'alfa', name: 'Газпром', value: 967_650, monthChangePct: 2.1 },
    { id: 6, type: AssetType.stocks, accountId: 'vtb', name: 'Лукойл', value: 856_210, monthChangePct: 1.45 },
    { id: 7, type: AssetType.stocks, accountId: 'sber', name: 'Полюс', value: 812_340, monthChangePct: 3.56 },
    { id: 8, type: AssetType.stocks, accountId: 'vtb', name: 'Яндекс', value: 1_748_165, monthChangePct: 3.18 },
    { id: 9, type: AssetType.fx, accountId: 'tinkoff', name: 'Доллар США', value: 34_000, monthChangePct: 0.4 },
    { id: 10, type: AssetType.cash, accountId: 'alfa', name: 'Рубли', value: 0, monthChangePct: 0 },
    { id: 11, type: AssetType.commercialEstate, accountId: 'alfa', name: 'Коммерция', value: 0, monthChangePct: 0 },
  ],
  accounts: [
    { id: 'vtb', name: 'ВТБ', dayChangePct: 0.32 },
    { id: 'sber', name: 'Сбербанк', dayChangePct: -0.18 },
    { id: 'tinkoff', name: 'Тинькофф', dayChangePct: -0.18 },
    { id: 'alfa', name: 'Альфа-Банк', dayChangePct: 1.1 },
  ],
  operations: [
    { id: 'op-1', type: OperationType.goalContribution, data: { goalId: 'apartment' }, amount: 50_000, at: todayAt(16, 30) },
    { id: 'op-2', type: OperationType.dividend, data: { assetId: 4 }, amount: 12_000, at: todayAt(8, 15) },
    { id: 'op-3', type: OperationType.deposit, data: { accountId: 'tinkoff' }, amount: 25_000, at: todayAt(11, 0) },
    { id: 'op-4', type: OperationType.buy, data: { assetId: 1 }, amount: -300_000, at: atDaysAgo(1, 18, 20) },
    { id: 'op-5', type: OperationType.deposit, data: { accountId: 'vtb' }, amount: 200_000, at: atDaysAgo(1, 12, 40) },
    { id: 'op-6', type: OperationType.dividend, data: { assetId: 6 }, amount: 5_000, at: atDaysAgo(1, 11, 10) },
    { id: 'op-7', type: OperationType.buy, data: { assetId: 5 }, amount: -20_000, at: atDaysAgo(1, 10, 5) },
    { id: 'op-8', type: OperationType.buy, data: { assetId: 8 }, amount: -80_000, at: atDaysAgo(1, 19, 0) },
    { id: 'op-9', type: OperationType.dividend, data: { assetId: 7 }, amount: 3_400, at: atDaysAgo(1, 9, 0) },
    { id: 'op-10', type: OperationType.sell, data: { assetId: 9 }, amount: 15_000, at: todayAt(14, 0) },
  ],
}
