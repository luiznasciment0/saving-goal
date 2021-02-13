import { render, screen } from '@testing-library/react'

import HeadingSmallXS from '.'

describe('<HeadingSmallXS />', () => {
  it('should render the HeadingSmallXS and its styles', () => {
    const { container } = render(<HeadingSmallXS>Test</HeadingSmallXS>)

    expect(screen.getByRole('heading', { name: /test/i })).toHaveStyle({
      'font-size': '2rem',
      'line-height': '2.4rem',
      'font-weight': '500',
      'font-family': `'Rubik'`,
      color: '#1e2a32'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
