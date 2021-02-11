import Typography, { ColorProps } from 'app/components/Typography'

interface HeadingSmallXSProps {
  children: React.ReactNode
  color?: ColorProps
}

const HeadingSmallXS = ({
  children,
  color = 'primaryBlack'
}: HeadingSmallXSProps) => (
  <Typography as="h2" family="secondary" size="xlarge" color={color}>
    {children}
  </Typography>
)

export default HeadingSmallXS
