import { Story, Meta } from '@storybook/react/types-6-0'
import DatePicker from '.'

export default {
  title: 'DatePicker',
  component: DatePicker
} as Meta

export const Default: Story = () => (
  <DatePicker
    incrementDate={() => alert('increment date')}
    decrementDate={() => alert('decrement date')}
    month="October"
    year={2021}
  />
)
