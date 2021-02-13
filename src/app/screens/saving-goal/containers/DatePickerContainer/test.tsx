import { render, screen } from '@testing-library/react'

import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import DatePickerContainer from '.'

describe('<DatePickerContainer />', () => {
  it('should add a month when righ arrow is pressed', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 0)}>
        <DatePickerContainer initialDate={new Date(2021, 0)} />
      </SavingGoalProvider>
    )

    const month = screen.getByRole('heading', { name: /January/i })
    expect(month).toHaveTextContent('January')

    const year = screen.getByRole('heading', { name: /2021/i })
    expect(year).toHaveTextContent('2021')

    expect(container.firstChild).toMatchSnapshot()
  })
})
