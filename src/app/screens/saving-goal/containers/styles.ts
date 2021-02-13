import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  medium: '560px',
  desktop: '690px'
})

export const InputWrapper = styled.div`
  ${customMedia.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
  `}
`
