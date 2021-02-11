import { StyledTypography } from './styles'

export type WeightProps = 'light' | 'normal' | 'bold'

export type SizeProps =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

export type ColorProps =
  | 'primaryBlue'
  | 'secondaryBlue'
  | 'primaryBlack'
  | 'secondaryBlack'
  | 'primaryGray'
  | 'secondaryGray'

export interface TypographyProps {
  children: React.ReactNode
  as?: React.ElementType
  family?: 'primary' | 'secondary'
  weight?: WeightProps
  size?: SizeProps
  color?: ColorProps
}

const Typography = ({
  children,
  as = 'h1',
  family = 'primary',
  weight = 'normal',
  size = 'medium',
  color = 'primaryBlue'
}: TypographyProps) => (
  <StyledTypography
    family={family}
    size={size}
    weight={weight}
    color={color}
    as={as}
  >
    {children}
  </StyledTypography>
)

export default Typography
