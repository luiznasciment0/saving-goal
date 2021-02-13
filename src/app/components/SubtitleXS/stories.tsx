import { Story, Meta } from '@storybook/react/types-6-0'
import SubtitleXS from '.'

export default {
  title: 'SubtitleXS',
  component: SubtitleXS,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <SubtitleXS>{args.children}</SubtitleXS>

Default.args = {
  children: 'Test'
}
