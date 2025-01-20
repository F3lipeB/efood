import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  top: 162px;
  color: ${cores.fundoClaro};
  background-color: rgba(0, 0, 0, 0.5);

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    padding-top: 8px;
    font-size: 32px;
    font-weight: 100;
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 32px;
    line-height: 38px;
  }
`
