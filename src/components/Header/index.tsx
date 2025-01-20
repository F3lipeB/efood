import { Link } from 'react-router-dom'
import { HeaderBar, Titulo } from './styles'
import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/Vector.png'

const Header = () => {
  return (
    <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo EFOOD" />
        </Link>
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </HeaderBar>
  )
}
export default Header
