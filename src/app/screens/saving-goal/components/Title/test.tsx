import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render the title', () => {
    const { container } = render(<Title />)

    expect(
      screen.getByRole('heading', { name: /Let's plan your saving goal./i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
