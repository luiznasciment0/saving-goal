import Typography from 'app/components/Typography'

interface CaptionProps {
  children: React.ReactNode
}

const Caption = ({ children }: CaptionProps) => (
  <Typography as="p" size="xsmall" weight="light" color="secondaryBlack">
    {children}
  </Typography>
)

export default Caption
