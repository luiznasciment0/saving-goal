import { render, screen } from '@testing-library/react'

import SavingGoalTitle from '.'

describe('<SavingGoalTitle />', () => {
  it('should render the SavingGoalTitle and its value', () => {
    const { container } = render(<SavingGoalTitle title="Teste" />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
