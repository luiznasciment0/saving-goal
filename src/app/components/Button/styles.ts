import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '350px'
})

export const StyledButton = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  background: #1b31a8;
  padding-top: 1.8rem;
  padding-bottom: 1.8rem;
  width: 32rem;
  border-radius: 3.2rem;
  border: 0;

  ${customMedia.lessThan('small')`
    width: 26rem;
  `}
`
