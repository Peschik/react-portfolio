import { AccountsCard } from '@/features/home/sections/AccountsCard'
import { AssetCard } from '@/features/home/sections/AssetCard'
import { CapitalCard } from '@/features/home/sections/CapitalCard'
import { GoalCard } from '@/features/home/sections/GoalCard'
import { HomeHeader } from '@/features/home/sections/HomeHeader'
import { MonthlyPlanCard } from '@/features/home/sections/MonthlyPlanCard'
import { allocationByType } from '@/features/portfolio/helpers'
import { usePortfolio } from '@/features/portfolio/usePortfolio'

export function HomeScreen() {
  const { data } = usePortfolio()

  return (
    <div className="flex flex-col gap-5 px-5 pt-6 pb-6">
      <HomeHeader name={data.greetingName} updatedAt={data.updatedAt} />
      <CapitalCard
        total={data.total}
        dayChange={data.dayChange}
        dayChangePct={data.dayChangePct}
      />
      {data.goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
      <MonthlyPlanCard plan={data.monthly} />
      <AssetCard allocation={allocationByType(data.assets)} />
      <AccountsCard accounts={data.accounts} assets={data.assets} />
    </div>
  )
}
