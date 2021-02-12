import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  medium: '560px'
})

export const Nav = styled.nav`
  background-color: #ffffff;
  width: 100%;
  height: 5.6rem;
  top: 0;
  padding-top: 1.5rem;

  ${customMedia.greaterThan('medium')`
    padding-bottom: 1.5rem;
  `}
`

export const Picture = styled.picture`
  margin: 1.6rem;
  ${customMedia.greaterThan('medium')`
    margin: 2rem auto 2rem 5.2rem;
    height: 3.2rem;
    width: 10rem;
  `}
`
