import { InputWrapper, DollarSign, Input } from './styles'
import DollarIcon from 'app/assets/icons/dollar-sign.png'
import DescriptionXS from 'app/components/DescriptionXS'
import { ChangeEventHandler } from 'react'

interface Props {
  value: string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const MoneyInput = ({ value, handleChange }: Props) => {
  return (
    <>
      <DescriptionXS>Total amount</DescriptionXS>
      <InputWrapper>
        <DollarSign src={DollarIcon} alt="Dollar Sign Icon" />
        <Input
          type="tel"
          placeholder="0.00"
          aria-label="money-input"
          value={value}
          onChange={handleChange}
        />
      </InputWrapper>
    </>
  )
}

export default MoneyInput
