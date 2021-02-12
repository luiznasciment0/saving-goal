import { StyledButton } from './styles'

interface Props {
  label: string
}

const Button = ({ label }: Props) => <StyledButton>{label}</StyledButton>

export default Button
