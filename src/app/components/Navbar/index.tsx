import { Nav, Picture } from './styles'
import Logo from 'app/assets/images/logo.png'
import Logo2x from 'app/assets/images/logo2x.png'

const Navbar = () => {
  return (
    <Nav>
      <Picture>
        <source media="(min-width: 768px)" srcSet={Logo2x} />
        <source media="(max-width: 768px)" srcSet={Logo} />
        <img src={Logo} alt="Origin Logo" />
      </Picture>
    </Nav>
  )
}

export default Navbar
