import { AssetType, type Portfolio } from '@/features/portfolio/types'

function todayAt(hours: number, minutes: number) {
  const date = new Date()
  date.setHours(hours, minutes, 0, 0)
  return date.toISOString()
}

export const mockPortfolio: Portfolio = {
  greetingName: 'Влад',
  updatedAt: todayAt(9, 41),
  total: 10_877_160,
  dayChange: 58_000,
  dayChangePct: 0.53,
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
    { id: 1, type: AssetType.gold, name: 'Золото (слитки)', value: 4_810_905, monthChangePct: 2.15 },
    { id: 2, type: AssetType.gold, name: 'Монеты', value: 302_000, monthChangePct: 1.4 },
    { id: 3, type: AssetType.gold, name: 'Обезл. металл, счета', value: 111_000, monthChangePct: 0.8 },
    { id: 4, type: AssetType.stocks, name: 'Сбербанк', value: 1_234_890, monthChangePct: 4.26 },
    { id: 5, type: AssetType.stocks, name: 'Газпром', value: 967_650, monthChangePct: 2.1 },
    { id: 6, type: AssetType.stocks, name: 'Лукойл', value: 856_210, monthChangePct: 1.45 },
    { id: 7, type: AssetType.stocks, name: 'Полюс', value: 812_340, monthChangePct: 3.56 },
    { id: 8, type: AssetType.stocks, name: 'Яндекс', value: 1_748_165, monthChangePct: 3.18 },
    { id: 9, type: AssetType.fx, name: 'Доллар США', value: 34_000, monthChangePct: 0.4 },
    { id: 10, type: AssetType.cash, name: 'Рубли', value: 0, monthChangePct: 0 },
    { id: 11, type: AssetType.commercialEstate, name: 'Коммерция', value: 0, monthChangePct: 0 },
  ],
  accounts: [
    { id: 'vtb', name: 'ВТБ', balance: 6_971_000, dayChangePct: 0.32 },
    { id: 'sber', name: 'Сбербанк', balance: 1_601_000, dayChangePct: -0.18 },
    { id: 'tinkoff', name: 'Тинькофф', balance: 254_000, dayChangePct: -0.18 },
    { id: 'alfa', name: 'Альфа-Банк', balance: 998_000, dayChangePct: 1.1 },
  ],
}
