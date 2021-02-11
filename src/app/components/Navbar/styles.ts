import styled from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  background-color: #ffffff;
  width: 100%;
  height: 5.6rem;
  top: 0;

  ${media.greaterThan('medium')`
    height: 8rem;
  `}
`

export const Img = styled.img`
  height: 2.4rem;
  width: 7.5rem;
  margin: 1.6rem;

  ${media.greaterThan('medium')`
    height: 3.2rem;
    width: 10rem;
    margin: 2rem auto 2rem 5.2rem;
  `}
`
