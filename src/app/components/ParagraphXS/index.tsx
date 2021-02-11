import Typography, { WeightProps, ColorProps } from 'app/components/Typography'

interface ParagraphXSProps {
  children: React.ReactNode
  weight?: WeightProps
  color?: ColorProps
}

const ParagraphXS = ({
  children,
  weight = 'light',
  color = 'primaryGray'
}: ParagraphXSProps) => (
  <Typography as="h3" weight={weight} size="small" color={color}>
    {children}
  </Typography>
)

export default ParagraphXS
