import { StyledButton } from './styles'

interface Props {
  children: React.ReactNode
}

const Button = ({ children }: Props) => <StyledButton>{children}</StyledButton>

export default Button
