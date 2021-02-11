import { Story, Meta } from '@storybook/react/types-6-0'
import Typography from '.'

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string'
    },
    tag: {
      type: 'string'
    },
    family: {
      type: 'string'
    },
    weight: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    color: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Typography {...args}>Teste</Typography>

Default.args = {
  children: 'Teste'
}
