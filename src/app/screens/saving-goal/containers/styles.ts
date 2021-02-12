import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktop: '690px'
})

export const InputWrapper = styled.div`
  ${customMedia.greaterThan('desktop')`
    display: flex;
    justify-content: space-between;
  `}
`
