import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'
import HeaderProduct from '../../components/HeaderProduct'
import { useParams } from 'react-router-dom'
import { useGetCardapioQuery, useGetProdutoQuery } from '../../services/api'

const Categories = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetCardapioQuery(id!)
  const { data: produto } = useGetProdutoQuery(id!)

  if (restaurante && produto) {
    return (
      <>
        <HeaderProduct />
        <Banner dados={restaurante} />
        <ProductsList items={produto} />
      </>
    )
  }
  return <h3>Carregando ...</h3>
}

export default Categories
