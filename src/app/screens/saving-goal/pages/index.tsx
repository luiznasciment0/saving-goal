import addMonths from 'date-fns/addMonths'
import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import SavingGoalContainer from '../containers'

import { useMemo } from 'react'

const SavingGoal = () => {
  const initialDate = useMemo(() => {
    return addMonths(new Date(), 1)
  }, [])

  return (
    <SavingGoalProvider initialDate={initialDate}>
      <SavingGoalContainer initialDate={initialDate} />
    </SavingGoalProvider>
  )
}

export default SavingGoal
