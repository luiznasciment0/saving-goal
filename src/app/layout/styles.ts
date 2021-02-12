import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  medium: '560px',
  desktop: '690px'
})

export const Content = styled.div`
  padding: 3.2rem 2.4rem 4rem;
  ${customMedia.greaterThan('desktop')`
    padding: 3.5rem 4rem 4rem;
    border-radius: 0.8rem;
  `}
`
export const Main = styled.main`
  background: #ffffff;

  ${customMedia.greaterThan('medium')`
    margin-left: 5rem;
    margin-right: 5rem;
  `}
`
