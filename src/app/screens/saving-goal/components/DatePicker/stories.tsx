import { Story, Meta } from '@storybook/react/types-6-0'
import DatePicker from '.'

export default {
  title: 'DatePicker',
  component: DatePicker
} as Meta

export const Default: Story = () => (
  <DatePicker
    minDate={{
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 2
    }}
  />
)
