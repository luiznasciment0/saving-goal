import { Story, Meta } from '@storybook/react/types-6-0'
import { SavingGoalProvider } from 'app/providers/SavingGoal'
import SavingPlan from '.'

export default {
  title: 'SavingPlan',
  component: SavingPlan
} as Meta

export const Default: Story = () => (
  <SavingGoalProvider>
    <SavingPlan />
  </SavingGoalProvider>
)
