import { Wrapper, TitleContainer, SubtitleContainer } from './styles'
import SubtitleXS from 'app/components/SubtitleXS'
import HeadingMediumXS from 'app/components/HeadingMediumXS'
import Caption from 'app/components/Caption'

interface Props {
  monthlyAmount: string
  dateDifference: number
  totalAmount: string
  month: string
  year: number
}

const SavingPlan = ({
  monthlyAmount,
  dateDifference,
  totalAmount,
  month,
  year
}: Props) => {
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
