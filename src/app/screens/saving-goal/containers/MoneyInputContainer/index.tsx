import React, { useState, ChangeEventHandler } from 'react'
import { useEffectsSavingGoal } from 'app/providers/SavingGoalProvider'

import MoneyInput from '../../components/MoneyInput'

const currencyMask = (str: string) => {
  let value = str
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1.$2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ',')

  str = value

  return value
}

const MoneyInputContainer = () => {
  const [value, setValue] = useState('')
  const { setAmount } = useEffectsSavingGoal()

  const setState = (value: string) => {
    setValue(value)
    setAmount(value)
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setState(currencyMask(e.currentTarget.value))
  }

  return <MoneyInput value={value} handleChange={onChange} />
}

export default MoneyInputContainer
