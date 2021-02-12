import DatePickerContainer from './DatePickerContainer'
import MoneyInputContainer from './MoneyInputContainer'
import SavingPlanContainer from './SavingPlanContainer'

import { InputWrapper } from './styles'

import { MinDate } from 'app/models/SavingGoal'

const SavingGoalContainer = ({ initialDate }: MinDate) => {
  return (
    <>
      <InputWrapper>
        <div>
          <MoneyInputContainer />
        </div>
        <div>
          <DatePickerContainer initialDate={initialDate} />
        </div>
      </InputWrapper>
      <SavingPlanContainer initialDate={initialDate} />
    </>
  )
}

export default SavingGoalContainer
