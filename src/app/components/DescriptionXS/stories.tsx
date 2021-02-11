import { Story, Meta } from '@storybook/react/types-6-0'
import DescriptionXS from '.'

export default {
  title: 'DescriptionXS',
  component: DescriptionXS,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <DescriptionXS>{args.children}</DescriptionXS>
)

Default.args = {
  children: 'Teste'
}
