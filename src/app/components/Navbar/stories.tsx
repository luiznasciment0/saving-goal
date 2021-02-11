import { Story, Meta } from '@storybook/react/types-6-0'
import Navbar from '.'

export default {
  title: 'Navbar',
  component: Navbar,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Navbar {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Navbar {...args} />
