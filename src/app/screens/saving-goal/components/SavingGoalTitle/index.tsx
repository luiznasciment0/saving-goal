import HeadingSmallXS from 'app/components/HeadingSmallXS'
import ParagraphXS from 'app/components/ParagraphXS'
import { Wrapper, HomeIcon } from './styles'
import HouseIcon from 'app/assets/images/house-icon.svg'

interface Props {
  title: string
}

const SavingGoalTitle = ({ title }: Props) => {
  return (
    <Wrapper>
      <HomeIcon src={HouseIcon} alt="House Icon" />
      <div>
        <HeadingSmallXS>{title}</HeadingSmallXS>
        <ParagraphXS>Saving goal</ParagraphXS>
      </div>
    </Wrapper>
  )
}

export default SavingGoalTitle
