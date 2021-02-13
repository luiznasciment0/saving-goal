import DescriptionXS from 'app/components/DescriptionXS'
import { Wrapper, ButtonLeft, ButtonRight, DateValueContainer } from './styles'
import ParagraphXS from 'app/components/ParagraphXS'
import ArrowLeft from 'app/assets/icons/leftArrow.png'
import ArrowRight from 'app/assets/icons/rightArrow.png'

interface Props {
  incrementDate: () => void
  decrementDate: () => void
  month: string
  year: number
}

const DatePicker = ({ incrementDate, decrementDate, month, year }: Props) => {
  return (
    <>
      <DescriptionXS>Reach goal by</DescriptionXS>
      <Wrapper>
        <ButtonLeft onClick={decrementDate} aria-label="Previous month">
          <img src={ArrowLeft} alt="Arrow Left" />
        </ButtonLeft>
        <DateValueContainer>
          <ParagraphXS data-testid="month" weight="bold" color="primaryBlack">
            {month}
          </ParagraphXS>
          <ParagraphXS data-testid="year" weight="light">
            {year}
          </ParagraphXS>
        </DateValueContainer>
        <ButtonRight onClick={incrementDate} aria-label="Next month">
          <img src={ArrowRight} alt="Arrow Right" />
        </ButtonRight>
      </Wrapper>
    </>
  )
}

export default DatePicker
