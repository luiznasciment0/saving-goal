import { useEffect, useState } from 'react'
import differenceInMonths from 'date-fns/differenceInMonths'
import addMonths from 'date-fns/addMonths'

import {
  useStateSavingGoal,
  useEffectsSavingGoal
} from 'app/providers/SavingGoal'

import { Wrapper, TitleContainer, SubtitleContainer } from './styles'
import SubtitleXS from 'app/components/SubtitleXS'
import HeadingMediumXS from 'app/components/HeadingMediumXS'
import Caption from 'app/components/Caption'

const initialDate = new Date(new Date().getFullYear(), new Date().getMonth())

const SavingPlan = () => {
  const [dateDifference, setDateDifference] = useState(0)
  const { totalAmount, reachDate, monthlyAmount } = useStateSavingGoal()
  const { calcMonthlyAmount } = useEffectsSavingGoal()

  const month = addMonths(reachDate, 1).toLocaleString('en-US', {
    month: 'long'
  })

  const year = reachDate.getFullYear()

  useEffect(() => {
    if (totalAmount == 0) {
      setDateDifference(0)
    } else if (
      month ===
      addMonths(initialDate, 1).toLocaleString('en-US', {
        month: 'long'
      })
    ) {
      setDateDifference(1)
    } else {
      setDateDifference(differenceInMonths(reachDate, initialDate))
    }
    calcMonthlyAmount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalAmount, reachDate])

  return (
    <Wrapper>
      <TitleContainer>
        <SubtitleXS color="primaryBlack">Monthly amount</SubtitleXS>
        <HeadingMediumXS>{monthlyAmount}</HeadingMediumXS>
      </TitleContainer>
      <SubtitleContainer>
        <Caption>
          You’re planning <strong>{dateDifference} monthly deposits</strong> to
          reach your
          <strong> ${totalAmount || '0.00'}</strong> goal by
          <strong>
            {' '}
            {month} {year}.
          </strong>
        </Caption>
      </SubtitleContainer>
    </Wrapper>
  )
}

export default SavingPlan
