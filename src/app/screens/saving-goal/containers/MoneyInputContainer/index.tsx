import { useState } from 'react'
import { useRifm } from 'rifm'
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

  const handleChange = (value: string) => {
    setState(value)
  }

  const rifm = useRifm({
    value,
    onChange: handleChange,
    format: currencyMask
  })

  return <MoneyInput value={rifm.value} handleChange={rifm.onChange} />
}

export default MoneyInputContainer
