import addMonths from 'date-fns/addMonths'
import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import SavingGoalContainer from '../containers'

const SavingGoal = () => {
  const initialDate = addMonths(new Date(), 1)

  return (
    <SavingGoalProvider initialDate={initialDate}>
      <SavingGoalContainer initialDate={initialDate} />
    </SavingGoalProvider>
  )
}

export default SavingGoal
