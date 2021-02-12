import { Story, Meta } from '@storybook/react/types-6-0'
import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import SavingPlan from '.'

export default {
  title: 'SavingPlan',
  component: SavingPlan
} as Meta

export const Default: Story = () => (
  <SavingGoalProvider>
    <SavingPlan
      monthlyAmount="5000"
      totalAmount="5000"
      year={2021}
      month="April"
      dateDifference={2}
    />
  </SavingGoalProvider>
)
