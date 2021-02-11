import Typography from 'app/components/Typography'

interface HeadingMediumXSProps {
  children: React.ReactNode
}

const HeadingMediumXS = ({ children }: HeadingMediumXSProps) => (
  <Typography
    as="h2"
    size="xxlarge"
    weight="normal"
    color="secondaryBlue"
    family="secondary"
  >
    {children}
  </Typography>
)

export default HeadingMediumXS
