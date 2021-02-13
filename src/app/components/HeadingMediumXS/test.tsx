import { render, screen } from '@testing-library/react'

import HeadingMediumXS from '.'

describe('<HeadingMediumXS />', () => {
  it('should render the HeadingMediumXS and its styles', () => {
    const { container } = render(<HeadingMediumXS>Test</HeadingMediumXS>)

    expect(screen.getByRole('heading', { name: /test/i })).toHaveStyle({
      'font-size': '2.4rem',
      'line-height': '2.88rem',
      'font-weight': '500',
      'font-family': `'Rubik'`,
      color: '#0079ff'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
