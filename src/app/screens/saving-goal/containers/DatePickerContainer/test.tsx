import { render, screen, fireEvent } from '@testing-library/react'

import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import DatePickerContainer from '.'

describe('<DatePickerContainer />', () => {
  it('should add a month when right arrow is pressed', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 0)}>
        <DatePickerContainer initialDate={new Date(2021, 0)} />
      </SavingGoalProvider>
    )

    const month = screen.getByRole('heading', { name: /January/i })
    expect(month).toHaveTextContent('January')

    const year = screen.getByRole('heading', { name: /2021/i })
    expect(year).toHaveTextContent('2021')

    const buttonRight = screen.getByLabelText('Next month')

    fireEvent.keyDown(buttonRight, { key: 'ArrowRight', code: 'ArrowRight' })
    expect(month).toHaveTextContent('February')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should sub a month when left arrow is pressed', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 1)}>
        <DatePickerContainer initialDate={new Date(2021, 1)} />
      </SavingGoalProvider>
    )

    const month = screen.getByRole('heading', { name: /February/i })
    expect(month).toHaveTextContent('February')

    const year = screen.getByRole('heading', { name: /2021/i })
    expect(year).toHaveTextContent('2021')

    const buttonRight = screen.getByLabelText('Next month')

    fireEvent.keyDown(buttonRight, { key: 'ArrowRight', code: 'ArrowRight' })
    expect(month).toHaveTextContent('March')

    const buttonLeft = screen.getByLabelText('Previous month')

    fireEvent.keyDown(buttonLeft, { key: 'ArrowLeft', code: 'ArrowLeft' })
    expect(month).toHaveTextContent('February')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should add a month when right button is clicked', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 1)}>
        <DatePickerContainer initialDate={new Date(2021, 1)} />
      </SavingGoalProvider>
    )

    const month = screen.getByRole('heading', { name: /February/i })
    expect(month).toHaveTextContent('February')

    const year = screen.getByRole('heading', { name: /2021/i })
    expect(year).toHaveTextContent('2021')

    const buttonRight = screen.getByLabelText('Next month')

    fireEvent.click(buttonRight)
    expect(month).toHaveTextContent('March')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should sub a month when left button is clicked', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 1)}>
        <DatePickerContainer initialDate={new Date(2021, 1)} />
      </SavingGoalProvider>
    )

    const month = screen.getByRole('heading', { name: /February/i })
    expect(month).toHaveTextContent('February')

    const year = screen.getByRole('heading', { name: /2021/i })
    expect(year).toHaveTextContent('2021')

    const buttonRight = screen.getByLabelText('Next month')

    fireEvent.click(buttonRight)
    expect(month).toHaveTextContent('March')

    const buttonLeft = screen.getByLabelText('Previous month')

    fireEvent.click(buttonLeft)
    expect(month).toHaveTextContent('February')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change to next year if is December', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 11)}>
        <DatePickerContainer initialDate={new Date(2021, 11)} />
      </SavingGoalProvider>
    )

    const month = screen.getByRole('heading', { name: /December/i })
    expect(month).toHaveTextContent('December')

    const year = screen.getByRole('heading', { name: /2021/i })
    expect(year).toHaveTextContent('2021')

    const buttonRight = screen.getByLabelText('Next month')

    fireEvent.click(buttonRight)
    expect(year).toHaveTextContent('2022')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change to past year if is January', () => {
    const { container } = render(
      <SavingGoalProvider initialDate={new Date(2021, 11)}>
        <DatePickerContainer initialDate={new Date(2021, 11)} />
      </SavingGoalProvider>
    )

    const month = screen.getByRole('heading', { name: /December/i })
    expect(month).toHaveTextContent('December')

    const year = screen.getByRole('heading', { name: /2021/i })
    expect(year).toHaveTextContent('2021')

    const buttonRight = screen.getByLabelText('Next month')

    fireEvent.click(buttonRight)
    expect(year).toHaveTextContent('2022')

    const buttonLeft = screen.getByLabelText('Previous month')

    fireEvent.click(buttonLeft)
    expect(year).toHaveTextContent('2021')

    expect(container.firstChild).toMatchSnapshot()
  })
})
