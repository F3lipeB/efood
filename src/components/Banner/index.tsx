import { Imagem } from './styles'
import { Restaurantes } from '../../pages/Home'

type Props = {
  dados: Restaurantes[]
}
const Banner = ({ dados }: Props) => {
  return (
    <>
      {Array.isArray(dados) &&
        dados.map((item) => (
          <Imagem key={item.id}>
            <img src={item.capa} alt={item.titulo} />
            <div className="container">
              <h3>{item.tipo}</h3>
              <h2>{item.titulo}</h2>
            </div>
          </Imagem>
        ))}
    </>
  )
}

export default Banner
