import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
// import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.cardapio.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.cardapio.nome} alt={item.cardapio.nome} />
              <div>
                <h3>{item.cardapio.nome}</h3>
                <span>{item.cardapio.preco}</span>
              </div>
              <button
                onClick={() => removeItem(item.cardapio.id)}
                type="button"
              />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} Produtos no carrinho</Quantity>
        <Prices>
          Total de {getTotalPrice()}
          <span>em ate 6x sem juros</span>
        </Prices>
        <Button type="button" title="Clique aqui para continuar a compra">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
