import { Nav, Img } from './styles'
import Logo from 'app/assets/images/logo.png'

const Navbar = () => {
  return (
    <Nav>
      <Img src={Logo} />
    </Nav>
  )
}

export default Navbar
