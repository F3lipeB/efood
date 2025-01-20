import Button from '../Button'
import {
  CardContainer,
  Content,
  Modal,
  ModalContent,
  Paragrafo,
  Titulo
} from './styles'
import { useState } from 'react'
import fechar from '../../assets/images/fechar.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Restaurantes } from '../../pages/Home'

type Props = {
  produto: Restaurantes
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(produto))
    dispatch(open())
  }

  const [modal, setModal] = useState({
    isVisible: false
  })
  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }
  const getDescription = (description: string) => {
    if (description.length > 150) {
      return description.slice(0, 150) + '...'
    }
    return description
  }

  return (
    <>
      <CardContainer>
        <img src={produto.cardapio.foto} alt={produto.cardapio.nome} />
        <div>
          <Titulo>{produto.cardapio.nome}</Titulo>
          <Paragrafo>{getDescription(produto.cardapio.descricao)}</Paragrafo>
          <Button
            onClick={() =>
              setModal({
                isVisible: true
              })
            }
            type="button"
            title="Clique aqui para aproveitar esta oferta"
          >
            Mais detalhes
          </Button>
        </div>
      </CardContainer>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img src={fechar} alt="fechar" onClick={closeModal} />
          </header>
          <Content>
            <div>
              <img src={produto.cardapio.foto} alt={produto.cardapio.nome} />
            </div>
            <div>
              <h2>{produto.cardapio.nome}</h2>
              <p>
                {produto.cardapio.descricao}
                <br />
                <br />
                {`Serve de ${produto.cardapio.porcao}`}
              </p>
              <Button
                type="button"
                title="Adicionar ao carrinho"
                onClick={addCart}
              >{`Adicionar ao carrinho - ${formataPreco(
                produto.cardapio.preco
              )}`}</Button>
            </div>
          </Content>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Product
