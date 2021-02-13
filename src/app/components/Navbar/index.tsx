import { Nav, Img } from './styles'
import LogoSVG from 'app/assets/images/origin_logo_dark.svg'

const Navbar = () => {
  return (
    <Nav>
      <a href="https://www.useorigin.com/">
        <Img src={LogoSVG} alt="Origin logo" />
      </a>
    </Nav>
  )
}

export default Navbar
