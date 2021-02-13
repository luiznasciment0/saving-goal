import styled from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  background-color: #ffffff;
  width: 100%;
  height: 5.6rem;
  top: 0;
`

export const Img = styled.img`
  height: 2.4rem;
  width: 7.5rem;
  margin: 1.6rem;

  ${media.greaterThan('medium')`
    height: 2.8rem;
    width: 10rem;
    margin: 1.6rem auto 1.6rem 5.2rem;
  `}
`
