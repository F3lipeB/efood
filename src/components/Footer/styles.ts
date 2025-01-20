import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.branco};
  padding: 40px 0;
  font-size: 14px;
  height: 298px;

  p {
    width: 480px;
    font-size: 10px;
    text-align: center;
    margin-bottom: 40px;
  }
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 80px;
`

export const Link = styled.a`
  margin-right: 8px;
  cursor: pointer;
`
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
