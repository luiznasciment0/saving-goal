import SavingPlan from '../../components/SavingPlan'

import { useEffect, useState } from 'react'
import differenceInMonths from 'date-fns/differenceInMonths'
import addMonths from 'date-fns/addMonths'

import {
  useStateSavingGoal,
  useEffectsSavingGoal
} from 'app/providers/SavingGoalProvider'

const initialDate = new Date(new Date().getFullYear(), new Date().getMonth())

const SavingPlanContainer = () => {
  const [dateDifference, setDateDifference] = useState(0)
  const { totalAmount, reachDate, monthlyAmount } = useStateSavingGoal()
  const { calcMonthlyAmount } = useEffectsSavingGoal()

  const month = reachDate.toLocaleString('en-US', {
    month: 'long'
  })

  const year = reachDate.getFullYear()

  useEffect(() => {
    if (totalAmount == 0) {
      setDateDifference(0)
    } else if (
      month ===
      addMonths(initialDate, 1).toLocaleString('en-US', {
        month: 'long'
      })
    ) {
      setDateDifference(1)
    } else {
      setDateDifference(differenceInMonths(reachDate, initialDate))
    }
    calcMonthlyAmount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalAmount, reachDate])

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
