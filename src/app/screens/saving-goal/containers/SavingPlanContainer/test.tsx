import { render, screen } from '@testing-library/react'

import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import SavingPlanContainer from '.'

describe('<SavingPlanContainer />', () => {
  it('should add a month when right arrow is pressed', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 1)}>
        <SavingPlanContainer initialDate={new Date(2021, 1)} />
      </SavingGoalProvider>
    )

    const monthlyAmountLabel = screen.getByRole('heading', {
      name: /Monthly amount/i
    })
    expect(monthlyAmountLabel).toHaveTextContent('Monthly amount')

    const monthlyAmount = screen.getByLabelText(
      'Amount of money to be monthly saved'
    )
    expect(monthlyAmount).toHaveTextContent('$0.00')

    const monthlyAmountDetails = screen.getByLabelText('Monthly save details')
    expect(monthlyAmountDetails).toHaveTextContent(
      'You’re planning 1 monthly deposits to reach your $0.00 goal by February 2021.'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
