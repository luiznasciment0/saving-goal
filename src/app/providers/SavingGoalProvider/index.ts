import constate from 'constate'
import { useReducer, useCallback } from 'react'

import { MinDate, SavingGoalState, Actions } from 'app/models/SavingGoal'

const currencyMask = (money: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(money)
}

const reducer = (state: SavingGoalState, action: Actions) => {
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

const useSavingGoal = ({ initialDate }: MinDate) => {
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

  const calcMonthlyAmount = useCallback(
    (dateDiff: number, totalAmount: string) => {
      const initialAmount = totalAmount === '0' ? '$0,00' : `${totalAmount}`

      if (dateDiff === 0) {
        dispatch({ type: 'SET_MONTHLY_AMOUNT', amount: initialAmount })
        return
      }

      const numberTotalAmount = Number(totalAmount.replace(/[,]+/g, ''))

      dispatch({
        type: 'SET_MONTHLY_AMOUNT',
        amount: currencyMask(numberTotalAmount / dateDiff)
      })
    },
    []
  )

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
