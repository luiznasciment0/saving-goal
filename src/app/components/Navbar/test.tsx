import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render a bigger image on desktop', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByRole('img')).toHaveStyleRule('height', '3.2rem', {
      media: '(min-width: 768px)'
    })
    expect(screen.getByRole('img')).toHaveStyleRule('width', '10rem', {
      media: '(min-width: 768px)'
    })
    expect(screen.getByRole('img')).toHaveStyleRule(
      'margin',
      '2rem auto 2rem 5.2rem',
      { media: '(min-width: 768px)' }
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a bigger header on desktop', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByRole('navigation')).toHaveStyleRule('height', '8rem', {
      media: '(min-width: 768px)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
