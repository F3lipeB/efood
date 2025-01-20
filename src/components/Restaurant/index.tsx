import Button from '../Button'
import Tag from '../Tag'
import {
  CardContainer,
  Estrela,
  Infos,
  Paragrafo,
  Titulo,
  TituloContainer
} from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  name: string
  nota: number
  description: string
  tipo: string
  image: string
  id: number
  destaque: boolean
}

const Restaurant = ({
  id,
  name,
  nota,
  description,
  tipo,
  image,
  destaque
}: Props) => (
  <CardContainer>
    <img src={image} alt={name} />
    <div>
      <Infos>
        {destaque ? (
          <>
            <Tag>Destaque da Semana</Tag>
            <Tag key={tipo}>{tipo}</Tag>
          </>
        ) : (
          <Tag>{tipo}</Tag>
        )}
      </Infos>
      <TituloContainer>
        <Titulo>{name}</Titulo>
        <div>
          <Titulo>{nota}</Titulo>
          <Estrela src={estrela} alt="" />
        </div>
      </TituloContainer>
      <Paragrafo>{description}</Paragrafo>
      <Button
        type="link"
        to={`/categories/${id}`}
        title="Clique aqui para aproveitar esta oferta"
      >
        Saiba mais
      </Button>
    </div>
  </CardContainer>
)

export default Restaurant
