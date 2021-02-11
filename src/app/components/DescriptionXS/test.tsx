import { render, screen } from '@testing-library/react'

import DescriptionXS from '.'

describe('<DescriptionXS />', () => {
  it('should render the DescriptionXS and its styles', () => {
    const { container } = render(<DescriptionXS>Teste</DescriptionXS>)

    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyle({
      'font-size': '1.2rem',
      'line-height': '1.6rem',
      'font-weight': '400',
      'font-family': `'Work Sans'`,
      color: '#1e2a32'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
