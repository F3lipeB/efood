import Product from '../Product'

import { Restaurantes } from '../../pages/Home'
import { Container, List } from './styles'

type Props = {
  items: Restaurantes[]
}
const ProductsList = ({ items }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {items.map((item) => (
            <li key={item.cardapio.id}>
              <Product
                produto={{
                  id: item.id,
                  titulo: item.titulo,
                  destacado: item.destacado,
                  tipo: item.tipo,
                  avaliacao: item.avaliacao,
                  descricao: item.descricao,
                  capa: item.capa,
                  cardapio: {
                    foto: item.cardapio.foto,
                    preco: item.cardapio.preco,
                    id: item.cardapio.id,
                    nome: item.cardapio.nome,
                    descricao: item.cardapio.descricao,
                    porcao: item.cardapio.porcao
                  }
                }}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
