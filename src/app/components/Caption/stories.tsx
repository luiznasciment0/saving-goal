import { Story, Meta } from '@storybook/react/types-6-0'
import Caption from '.'

export default {
  title: 'Caption',
  component: Caption,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Caption>{args.children}</Caption>

Default.args = {
  children: 'Teste'
}
