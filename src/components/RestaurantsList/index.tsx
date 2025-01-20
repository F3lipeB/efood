import { Restaurantes } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const RestaurantsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurant
            key={restaurante.id}
            id={restaurante.id}
            nota={restaurante.avaliacao}
            description={restaurante.descricao}
            image={restaurante.capa}
            tipo={restaurante.tipo}
            name={restaurante.titulo}
            destaque={restaurante.destacado}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
