import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import MoneyInputContainer from '.'

const setup = () => {
  const utils = render(
    <SavingGoalProvider initialDate={new Date()}>
      <MoneyInputContainer />
    </SavingGoalProvider>
  )
  const input = utils.getByLabelText('Money input')
  return {
    input,
    ...utils
  }
}

describe('<MoneyInput />', () => {
  it('should allow only numbers', () => {
    const { container, input } = setup()

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: 'Test' } })
    expect(input).toHaveValue('')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should format 1k', () => {
    const { container, input } = setup()

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: '100000' } })
    expect(input).toHaveValue('1,000.00')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should format 10k', () => {
    const { container, input } = setup()

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: '1000000' } })
    expect(input).toHaveValue('10,000.00')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should format 100k', () => {
    const { container, input } = setup()

    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: '10000000' } })
    expect(input).toHaveValue('100,000.00')

    expect(container.firstChild).toMatchSnapshot()
  })
})
