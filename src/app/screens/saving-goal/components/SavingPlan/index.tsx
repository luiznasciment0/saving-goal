import {
  Wrapper,
  TitleContainer,
  SubtitleContainer,
  ButtonWrapper
} from './styles'
import SubtitleXS from 'app/components/SubtitleXS'
import HeadingMediumXS from 'app/components/HeadingMediumXS'
import Caption from 'app/components/Caption'
import Button from 'app/components/Button'

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
    <>
      <Wrapper>
        <TitleContainer>
          <SubtitleXS color="primaryBlack" tag="h6">
            Monthly amount
          </SubtitleXS>
          <HeadingMediumXS>{monthlyAmount}</HeadingMediumXS>
        </TitleContainer>
        <SubtitleContainer>
          <Caption>
            You’re planning <strong>{dateDifference} monthly deposits</strong>{' '}
            to reach your
            <strong> ${totalAmount || '0.00'}</strong> goal by
            <strong>
              {' '}
              {month} {year}.
            </strong>
          </Caption>
        </SubtitleContainer>
      </Wrapper>
      <ButtonWrapper>
        <Button>Confirm</Button>
      </ButtonWrapper>
    </>
  )
}

export default SavingPlan
