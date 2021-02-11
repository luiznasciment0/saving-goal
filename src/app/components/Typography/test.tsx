import { render, screen } from '@testing-library/react'

import Typography from '.'

describe('<Typography />', () => {
  it('should render the medium size, normal weight, primaryBlue color and primary family by default', () => {
    const { container } = render(<Typography>Teste</Typography>)

    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyle({
      'font-size': '1.6rem',
      'line-height': '2rem',
      'font-weight': '500',
      'font-family': `'Work Sans'`,
      color: '#1b31a8'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the xsmall size`, () => {
    const { container } = render(<Typography size="xsmall">Teste 2</Typography>)

    expect(screen.getByRole('heading', { name: /teste 2/i })).toHaveStyle({
      'font-size': '1.2rem',
      'line-height': '1.6rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the small size`, () => {
    const { container } = render(<Typography size="small">Teste 3</Typography>)

    expect(screen.getByRole('heading', { name: /teste 3/i })).toHaveStyle({
      'font-size': '1.4rem',
      'line-height': '2.1rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the medium size`, () => {
    const { container } = render(<Typography size="medium">Teste 4</Typography>)

    expect(screen.getByRole('heading', { name: /teste 4/i })).toHaveStyle({
      'font-size': '1.6rem',
      'line-height': '2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the large size`, () => {
    const { container } = render(<Typography size="large">Teste 5</Typography>)

    expect(screen.getByRole('heading', { name: /teste 5/i })).toHaveStyle({
      'font-size': '1.8rem',
      'line-height': '2.16rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the xlarge size`, () => {
    const { container } = render(<Typography size="xlarge">Teste 6</Typography>)

    expect(screen.getByRole('heading', { name: /teste 6/i })).toHaveStyle({
      'font-size': '2rem',
      'line-height': '2.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the xxlarge size`, () => {
    const { container } = render(
      <Typography size="xxlarge">Teste 7</Typography>
    )

    expect(screen.getByRole('heading', { name: /teste 7/i })).toHaveStyle({
      'font-size': '2.4rem',
      'line-height': '2.88rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the secondaryGray color`, () => {
    const { container } = render(
      <Typography color="secondaryGray">Hello</Typography>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#4d6475'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the primaryGray color`, () => {
    const { container } = render(
      <Typography color="primaryGray">Hello</Typography>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#708797'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the secondaryBlack color`, () => {
    const { container } = render(
      <Typography color="secondaryBlack">Hello</Typography>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#1c1e1f'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the primaryBlack color`, () => {
    const { container } = render(
      <Typography color="primaryBlack">Hello</Typography>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#1e2a32'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the secondaryBlue color`, () => {
    const { container } = render(
      <Typography color="secondaryBlue">Hello</Typography>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#0079ff'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the primaryBlue color`, () => {
    const { container } = render(
      <Typography color="primaryBlue">Hello</Typography>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#1b31a8'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the light weight`, () => {
    const { container } = render(<Typography weight="light">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      'font-weight': '400'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the normal weight`, () => {
    const { container } = render(<Typography weight="normal">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      'font-weight': '500'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the bold weight`, () => {
    const { container } = render(<Typography weight="bold">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      'font-weight': '600'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it(`should render the Rubik font-family`, () => {
    const { container } = render(
      <Typography family="secondary">Hello</Typography>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      'font-family': `'Rubik'`
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
