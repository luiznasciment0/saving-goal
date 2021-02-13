import SavingPlan from '../../components/SavingPlan'

import { useEffect, useState } from 'react'
import differenceInMonths from 'date-fns/differenceInMonths'

import {
  useStateSavingGoal,
  useEffectsSavingGoal
} from 'app/providers/SavingGoalProvider'

import { MinDate } from 'app/models/SavingGoal'

const SavingPlanContainer = ({ initialDate }: MinDate) => {
  const [dateDifference, setDateDifference] = useState(0)
  const { totalAmount, reachDate, monthlyAmount } = useStateSavingGoal()
  const { calcMonthlyAmount } = useEffectsSavingGoal()

  const month = reachDate.toLocaleString('en-US', {
    month: 'long'
  })

  const year = reachDate.getFullYear()

  useEffect(() => {
    setDateDifference(differenceInMonths(reachDate, initialDate) + 1)
    calcMonthlyAmount(
      differenceInMonths(reachDate, initialDate) + 1,
      totalAmount
    )
  }, [totalAmount, reachDate, calcMonthlyAmount, initialDate])

  return (
    <SavingPlan
      dateDifference={dateDifference}
      month={month}
      year={year}
      monthlyAmount={monthlyAmount}
      totalAmount={totalAmount}
    />
  )
}

export default SavingPlanContainer
