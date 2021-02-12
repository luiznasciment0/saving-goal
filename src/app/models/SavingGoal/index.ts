export interface MinDate {
  initialDate: Date
}

export interface SavingGoalState {
  reachDate: Date
  totalAmount: string
  monthlyAmount: string
}

export type Actions =
  | { type: 'SET_TOTAL_AMOUNT'; money: string }
  | { type: 'SET_DATE'; date: Date }
  | { type: 'SET_MONTHLY_AMOUNT'; amount: string }
