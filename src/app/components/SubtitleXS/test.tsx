import { render, screen } from '@testing-library/react'

import SubtitleXS from '.'

describe('<SubtitleXS />', () => {
  it('should render the SubtitleXS and its styles', () => {
    const { container } = render(<SubtitleXS>Test</SubtitleXS>)

    expect(screen.getByRole('heading', { name: /test/i })).toHaveStyle({
      'font-size': '1.8rem',
      'line-height': '2.16rem',
      'font-weight': '400',
      color: '#1b31a8'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
