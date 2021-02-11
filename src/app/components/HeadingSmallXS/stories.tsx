import { Story, Meta } from '@storybook/react/types-6-0'
import HeadingSmallXS from '.'

export default {
  title: 'HeadingSmallXS',
  component: HeadingSmallXS,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <HeadingSmallXS>{args.children}</HeadingSmallXS>
)

Default.args = {
  children: 'Teste'
}
