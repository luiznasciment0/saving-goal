import DatePickerContainer from './DatePickerContainer'
import MoneyInputContainer from './MoneyInputContainer'
import SavingPlanContainer from './SavingPlanContainer'

import { MinDate } from 'app/models/SavingGoal'

const SavingGoalContainer = ({ initialDate }: MinDate) => {
  return (
    <>
      <MoneyInputContainer />
      <DatePickerContainer initialDate={initialDate} />
      <SavingPlanContainer initialDate={initialDate} />
    </>
  )
}

export default SavingGoalContainer
