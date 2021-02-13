import Typography from 'app/components/Typography'

interface HeadingMediumXSProps {
  children: React.ReactNode
  tag?: 'p' | 'h2'
}

const HeadingMediumXS = ({ children, tag = 'h2' }: HeadingMediumXSProps) => (
  <Typography
    as={tag}
    size="xxlarge"
    weight="normal"
    color="secondaryBlue"
    family="secondary"
  >
    {children}
  </Typography>
)

export default HeadingMediumXS
