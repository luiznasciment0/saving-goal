import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'

import SavingGoalContainer from '../containers'

const SavingGoal = () => (
  <SavingGoalProvider>
    <SavingGoalContainer />
  </SavingGoalProvider>
)

export default SavingGoal
