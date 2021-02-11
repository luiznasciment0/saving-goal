import { Story, Meta } from '@storybook/react/types-6-0'
import HeadingMediumXS from '.'

export default {
  title: 'HeadingMediumXS',
  component: HeadingMediumXS,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <HeadingMediumXS>{args.children}</HeadingMediumXS>
)

Default.args = {
  children: 'Teste'
}
