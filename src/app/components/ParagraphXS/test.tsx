import { render, screen } from '@testing-library/react'

import ParagraphXS from '.'

describe('<ParagraphXS />', () => {
  it('should render the ParagraphXS and its styles', () => {
    const { container } = render(<ParagraphXS>Test</ParagraphXS>)

    expect(screen.getByRole('heading', { name: /test/i })).toHaveStyle({
      'font-size': '1.4rem',
      'line-height': '2.1rem',
      'font-weight': '400',
      'font-family': `'Work Sans'`,
      color: '#708797'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
