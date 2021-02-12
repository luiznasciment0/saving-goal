import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button label={args.label} />

Default.args = {
  label: 'Confirm'
}
