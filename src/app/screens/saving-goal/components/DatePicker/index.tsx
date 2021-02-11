import React, { useState } from 'react'
import DescriptionXS from 'app/components/DescriptionXS'
import { Wrapper, ButtonLeft, ButtonRight, DateValueContainer } from './styles'
import ParagraphXS from 'app/components/ParagraphXS'
import ArrowLeft from 'assets/images/leftArrow.png'
import ArrowRight from 'assets/images/rightArrow.png'

import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import useKeyPress from 'app/hooks/useKeyPress'
import { useEffectsSavingGoal } from 'app/providers/SavingGoal'

interface Props {
  minDate: { year: number; month: number }
}

const DatePicker = ({ minDate }: Props) => {
  const { setDateToReachGoal } = useEffectsSavingGoal()

  const initialDate = new Date(minDate.year, minDate.month)
  const [date, setDate] = useState(initialDate)

  const month = date.toLocaleString('en-US', {
    month: 'long'
  })

  const year = date.getFullYear()

  const incrementDate = () => {
    setDate(addMonths(date, 1))
    setDateToReachGoal(addMonths(date, 1))
  }

  const decrementDate = () => {
    if (date > initialDate) {
      setDate(subMonths(date, 1))
      setDateToReachGoal(subMonths(date, 1))
    }
  }

  useKeyPress('ArrowRight', incrementDate)
  useKeyPress('ArrowLeft', decrementDate)

  return (
    <>
      <DescriptionXS>Reach goal by</DescriptionXS>
      <Wrapper>
        <ButtonLeft onClick={decrementDate} aria-label="Previous month">
          <img src={ArrowLeft} alt="Arrow Left" />
        </ButtonLeft>
        <DateValueContainer>
          <ParagraphXS weight="bold" color="primaryBlack">
            {month}
          </ParagraphXS>
          <ParagraphXS weight="light">{year}</ParagraphXS>
        </DateValueContainer>
        <ButtonRight onClick={incrementDate} aria-label="Next month">
          <img src={ArrowRight} alt="Arrow Right" />
        </ButtonRight>
      </Wrapper>
    </>
  )
}

export default DatePicker
