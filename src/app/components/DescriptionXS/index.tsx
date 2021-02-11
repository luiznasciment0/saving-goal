import Typography from 'app/components/Typography'

interface DescriptionXSProps {
  children: React.ReactNode
}

const DescriptionXS = ({ children }: DescriptionXSProps) => (
  <Typography as="h4" size="xsmall" weight="light" color="primaryBlack">
    {children}
  </Typography>
)

export default DescriptionXS
