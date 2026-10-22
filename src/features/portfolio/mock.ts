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
  sparkline: [92, 90, 94, 93, 97, 96, 101, 99, 104, 108, 107, 112],
  goals: [
    {
      id: 'apartment',
      title: 'Квартира',
      target: 16_000_000,
      saved: 11_548_460,
    },
  ],
  monthly: {
    target: 350_000,
    contributed: 50_050,
  },
  assets: [
    { id: 1, type: AssetType.gold, share: 0.48 },
    { id: 2, type: AssetType.stocks, share: 0.516 },
    { id: 3, type: AssetType.fx, share: 0.004 },
    { id: 4, type: AssetType.cash, share: 0 },
    { id: 5, type: AssetType.commercialEstate, share: 0 },
  ],
  accounts: [
    { id: 'vtb', name: 'ВТБ', balance: 6_971_000, dayChangePct: 0.32 },
    { id: 'sber', name: 'Сбербанк', balance: 1_601_000, dayChangePct: -0.18 },
    { id: 'tinkoff', name: 'Тинькофф', balance: 254_000, dayChangePct: -0.18 },
    { id: 'alfa', name: 'Альфа-Банк', balance: 998_000, dayChangePct: 1.1 },
  ],
}
