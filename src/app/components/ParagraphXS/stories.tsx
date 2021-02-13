import { Story, Meta } from '@storybook/react/types-6-0'
import ParagraphXS from '.'

export default {
  title: 'ParagraphXS',
  component: ParagraphXS,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <ParagraphXS>{args.children}</ParagraphXS>
)

Default.args = {
  children: 'Test'
}
