import { Story, Meta } from '@storybook/react/types-6-0'
import { SavingGoalProvider } from 'app/providers/SavingGoalProvider'
import MoneyInput from '.'

export default {
  title: 'MoneyInput',
  component: MoneyInput
} as Meta

const initialDate = new Date()

export const Default: Story = () => (
  <SavingGoalProvider initialDate={initialDate}>
    <MoneyInput value="$5000" handleChange={() => console.log('Test')} />
  </SavingGoalProvider>
)
