import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  medium: '560px'
})

export const Wrapper = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 4px;
  margin-top: 2.4rem;
  margin-bottom: 3.2rem;
`

export const TitleContainer = styled.div`
  display: flex;
  padding: 2.7rem 2.4rem;
  justify-content: space-between;
  ${customMedia.greaterThan('medium')`
    padding: 3.1rem 3.2rem;
  `}
`

export const SubtitleContainer = styled.div`
  background-color: #f4f8fa;
  padding: 2.4rem 3.2rem;
  display: grid;
  place-items: center;
  text-align: center;
  ${customMedia.greaterThan('medium')`
    text-align: left;
  `}
`

export const ButtonWrapper = styled.div`
  text-align: center;
`
