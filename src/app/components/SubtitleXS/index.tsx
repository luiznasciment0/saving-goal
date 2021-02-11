import Typography, { ColorProps } from 'app/components/Typography'

interface SubtitleXSProps {
  children: React.ReactNode
  color?: ColorProps
  tag?: 'h1' | 'h6'
}

const SubtitleXS = ({
  children,
  color = 'primaryBlue',
  tag = 'h1'
}: SubtitleXSProps) => (
  <Typography weight="light" size="large" color={color} as={tag}>
    {children}
  </Typography>
)

export default SubtitleXS
