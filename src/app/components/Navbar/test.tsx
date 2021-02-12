import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render a bigger header on desktop', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByRole('navigation')).toHaveStyleRule(
      'padding-bottom',
      '1.5rem',
      {
        media: '(min-width: 560px)'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
