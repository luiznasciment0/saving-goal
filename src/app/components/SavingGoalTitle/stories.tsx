import { Story, Meta } from '@storybook/react/types-6-0'
import SavingGoalTitle from '.'

export default {
  title: 'SavingGoalTitle',
  component: SavingGoalTitle
} as Meta

export const Default: Story = () => <SavingGoalTitle title="Buy a house" />
