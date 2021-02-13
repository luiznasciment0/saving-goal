import { render, screen } from '@testing-library/react'

import Caption from '.'

describe('<Caption />', () => {
  it('should render the Caption and its styles', () => {
    const { container } = render(<Caption>Test</Caption>)

    expect(screen.getByText(/test/i)).toHaveStyle({
      'font-size': '1.2rem',
      'line-height': '1.6rem',
      'font-weight': '400',
      'font-family': `'Work Sans'`,
      color: '#1c1e1f'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
