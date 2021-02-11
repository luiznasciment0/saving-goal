import { render, screen, fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { SavingGoalProvider } from 'app/providers/SavingGoal'
import MoneyInput from '.'

const setup = () => {
  const utils = render(
    <SavingGoalProvider>
      <MoneyInput />
    </SavingGoalProvider>
  )
  const input = utils.getByLabelText('money-input')
  return {
    input,
    ...utils
  }
}

describe('<MoneyInput />', () => {
  it('should allow only numbers', () => {
    const { container } = setup()
    const input = screen.getByLabelText('money-input')

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: 'Teste' } })
    expect(input).toHaveValue('')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should format 1k', () => {
    const { container } = setup()
    const input = screen.getByLabelText('money-input')

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: '100000' } })
    expect(input).toHaveValue('1,000.00')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should format 10k', () => {
    const { container } = setup()
    const input = screen.getByLabelText('money-input')

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: '1000000' } })
    expect(input).toHaveValue('10,000.00')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should format 100k', () => {
    const { container } = setup()
    const input = screen.getByLabelText('money-input')

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: '10000000' } })
    expect(input).toHaveValue('100,000.00')

    expect(container.firstChild).toMatchSnapshot()
  })
})
