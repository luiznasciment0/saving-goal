import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  medium: '560px',
  desktop: '690px'
})

export const Content = styled.div`
  padding: 3.2rem 2.4rem 4rem;
  max-width: 60.9rem;
  background: #ffffff;
  box-shadow: 0 1.6rem 3.2rem rgba(30, 42, 50, 0.08);
  border-radius: 0.8rem;
  ${customMedia.greaterThan('medium')`
    padding: 3.5rem 4rem 4rem;
  `}
`
export const Main = styled.main`
  ${customMedia.greaterThan('medium')`
    margin-left: 5rem;
    margin-right: 5rem;
    display: grid;
    place-items: center;
  `}
`
