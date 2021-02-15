import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import SavingGoalContainer from '.'

const initialDate = new Date(2021, 1)

const setup = () => {
  const utils = render(
    <SavingGoalProvider initialDate={initialDate}>
      <SavingGoalContainer initialDate={initialDate} />
    </SavingGoalProvider>
  )

  const moneyInput = utils.getByLabelText('Money input')

  const datePicker = utils.getByLabelText('Month and year')
  const buttonRight = utils.getByLabelText('Next month')
  const buttonLeft = utils.getByLabelText('Previous month')

  const savingPlanTitle = utils.getByLabelText(
    'Amount of money to be monthly saved'
  )

  const savingPlanDetails = utils.getByLabelText('Monthly save details')

  return {
    moneyInput,
    datePicker,
    buttonLeft,
    buttonRight,
    savingPlanTitle,
    savingPlanDetails,
    ...utils
  }
}

describe('<SavingGoalContainer />', () => {
  it('should work correctly', () => {
    const {
      container,
      moneyInput,
      datePicker,
      savingPlanTitle,
      savingPlanDetails,
      buttonLeft,
      buttonRight
    } = setup()

    expect(moneyInput).toHaveValue('')
    expect(datePicker).toHaveTextContent('February2021')
    expect(savingPlanTitle).toHaveTextContent('Monthly amount$0.00')
    expect(savingPlanDetails).toHaveTextContent(
      'You’re planning 1 monthly deposits to reach your $0.00 goal by February 2021.'
    )

    fireEvent.change(moneyInput, { target: { value: '100000' } })
    expect(moneyInput).toHaveValue('1,000.00')
    expect(savingPlanTitle).toHaveTextContent('Monthly amount$1,000.00')
    expect(savingPlanDetails).toHaveTextContent(
      'You’re planning 1 monthly deposits to reach your $1,000.00 goal by February 2021.'
    )

    fireEvent.keyDown(buttonRight, { key: 'ArrowRight', code: 'ArrowRight' })
    expect(datePicker).toHaveTextContent('March2021')
    expect(savingPlanTitle).toHaveTextContent('Monthly amount$500.00')
    expect(savingPlanDetails).toHaveTextContent(
      'You’re planning 2 monthly deposits to reach your $1,000.00 goal by March 2021.'
    )

    fireEvent.keyDown(buttonRight, { key: 'ArrowRight', code: 'ArrowRight' })
    expect(datePicker).toHaveTextContent('April2021')
    expect(savingPlanTitle).toHaveTextContent('Monthly amount$333.33')
    expect(savingPlanDetails).toHaveTextContent(
      'You’re planning 3 monthly deposits to reach your $1,000.00 goal by April 2021.'
    )

    fireEvent.keyDown(buttonLeft, { key: 'ArrowLeft', code: 'ArrowLeft' })
    expect(datePicker).toHaveTextContent('March2021')
    expect(savingPlanTitle).toHaveTextContent('Monthly amount$500.00')
    expect(savingPlanDetails).toHaveTextContent(
      'You’re planning 2 monthly deposits to reach your $1,000.00 goal by March 2021.'
    )

    fireEvent.click(buttonRight)
    expect(datePicker).toHaveTextContent('April2021')
    expect(savingPlanTitle).toHaveTextContent('Monthly amount$333.33')
    expect(savingPlanDetails).toHaveTextContent(
      'You’re planning 3 monthly deposits to reach your $1,000.00 goal by April 2021.'
    )

    fireEvent.click(buttonLeft)
    expect(datePicker).toHaveTextContent('March2021')
    expect(savingPlanTitle).toHaveTextContent('Monthly amount$500.00')
    expect(savingPlanDetails).toHaveTextContent(
      'You’re planning 2 monthly deposits to reach your $1,000.00 goal by March 2021.'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
