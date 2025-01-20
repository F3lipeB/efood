import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '../Tag'

export const ButtonProduct = styled.button<Props>`
  background-color: ${cores.branco};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
`
