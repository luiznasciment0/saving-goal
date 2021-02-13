import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render a bigger image on desktop', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByRole('img')).toHaveStyleRule('height', '2.8rem', {
      media: '(min-width: 768px)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
