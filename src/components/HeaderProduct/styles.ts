import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 186px;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Titulo = styled.h2`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: 900;
  text-align: center;
`
