import { Story, Meta } from '@storybook/react/types-6-0'
import { SavingGoalProvider } from 'app/providers/SavingGoal'
import MoneyInput from '.'

export default {
  title: 'MoneyInput',
  component: MoneyInput
} as Meta

export const Default: Story = () => (
  <SavingGoalProvider>
    <MoneyInput />
  </SavingGoalProvider>
)
