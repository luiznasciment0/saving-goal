import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the Button and its label', () => {
    const { container } = render(<Button>Teste</Button>)

    expect(screen.getByRole('button', { name: /Teste/i })).toHaveStyle({
      'font-size': '1.6rem',
      'font-weight': '600',
      color: '#ffffff',
      'text-align': 'center',
      background: '#1b31a8',
      'padding-top': '1.8rem',
      'padding-bottom': '1.8rem',
      width: '32rem',
      'border-radius': '3.2rem',
      border: 0
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
