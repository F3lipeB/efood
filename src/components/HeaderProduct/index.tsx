import { Link } from 'react-router-dom'
import { HeaderBar, Titulo } from './styles'
import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/Vector.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const HeaderProduct = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Link to="/">
          <Titulo>Restaurantes</Titulo>
        </Link>
        <Link to="/">
          <img src={logo} alt="Logo EFOOD" />
        </Link>
        <Titulo onClick={openCart}>
          {items.length} - produto(s) no carrinho
        </Titulo>
      </div>
    </HeaderBar>
  )
}
export default HeaderProduct
