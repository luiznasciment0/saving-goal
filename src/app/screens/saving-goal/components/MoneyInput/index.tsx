import { useState } from 'react'
import { useRifm } from 'rifm'
import { useEffectsSavingGoal } from 'app/providers/SavingGoal'

import { InputWrapper, DollarSign, Input } from './styles'
import DollarIcon from 'app/assets/icons/dollar-sign.png'
import DescriptionXS from 'app/components/DescriptionXS'

const currencyMask = (str: string) => {
  let value = str
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1.$2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ',')

  str = value

  return value
}

const MoneyInput = () => {
  const [value, setValue] = useState('')
  const { setAmount } = useEffectsSavingGoal()

  const setState = (value: string) => {
    setValue(value)
    setAmount(value)
  }

  const handleChange = (value: string) => {
    setState(value)
  }

  const rifm = useRifm({
    value,
    onChange: handleChange,
    format: currencyMask
  })

  return (
    <>
      <DescriptionXS>Total amount</DescriptionXS>
      <InputWrapper>
        <DollarSign src={DollarIcon} alt="Dollar Sign Icon" />
        <Input
          type="tel"
          placeholder="0.00"
          aria-label="money-input"
          value={rifm.value}
          onChange={rifm.onChange}
        />
      </InputWrapper>
    </>
  )
}

export default MoneyInput
