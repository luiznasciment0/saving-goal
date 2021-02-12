/* eslint-disable @typescript-eslint/no-explicit-any */
import constate from 'constate'
import { useReducer } from 'react'

import differenceInMonths from 'date-fns/differenceInMonths'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_TOTAL_AMOUNT':
      return { ...state, totalAmount: action.money }
    case 'SET_DATE':
      return { ...state, reachDate: action.date }
    case 'SET_MONTHLY_AMOUNT':
      return {
        ...state,
        monthlyAmount: action.amount
      }
  }
}

const initialYear = new Date().getFullYear()
const initialMonth = new Date().getMonth() + 1

const initialDate = new Date(initialYear, initialMonth)

const currencyMask = (money: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(money)
}

const useSavingGoal = () => {
  const [state, dispatch] = useReducer(reducer, {
    reachDate: initialDate,
    totalAmount: '',
    monthlyAmount: ''
  })

  const setAmount = (money: string) => {
    dispatch({ type: 'SET_TOTAL_AMOUNT', money })
  }

  const setDateToReachGoal = (date: Date) => {
    dispatch({ type: 'SET_DATE', date })
  }

  const calcMonthlyAmount = () => {
    const { reachDate, totalAmount } = state
    const dateDifference = differenceInMonths(reachDate, initialDate)

    const initialAmount = totalAmount == 0 ? currencyMask(0) : `$${totalAmount}`

    if (dateDifference === 0) {
      dispatch({ type: 'SET_MONTHLY_AMOUNT', amount: initialAmount })
      return
    }

    const numberTotalAmount = Number(totalAmount.replace(/[,]+/g, ''))

    let amount = ''
    if (numberTotalAmount === 0) {
      amount = '$0.00'
    } else {
      amount = currencyMask(numberTotalAmount / dateDifference)
    }

    dispatch({ type: 'SET_MONTHLY_AMOUNT', amount })
  }

  return {
    state,
    effects: {
      setAmount,
      setDateToReachGoal,
      calcMonthlyAmount
    }
  }
}

const [SavingGoalProvider, useStateSavingGoal, useEffectsSavingGoal] = constate(
  useSavingGoal,
  (value) => value.state,
  (value) => value.effects
)

export { SavingGoalProvider, useStateSavingGoal, useEffectsSavingGoal }
