import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonProduct } from '../Button/styles'

export const CardContainer = styled.div`
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-top: 80px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 8px;

  > img {
    width: 100%;
    max-height: 167px;
    object-fit: cover;
  }
  ${ButtonProduct} {
    width: 100%;
    cursor: pointer;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  height: 88px;
  margin-bottom: 8px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  display: block;
  background-color: ${cores.rosa};
  color: ${cores.branco};

  ${ButtonProduct} {
    width: 218px;
    height: 24px;
    cursor: pointer;
  }

  header {
    display: flex;
    justify-content: end;
    margin-top: 8px;
    margin-right: 8px;

    > img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 32px;
  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    margin-top: 32px;
    line-height: 22px;
  }
  p {
    width: 656px;
    height: 167px;
    font-size: 14px;
    line-height: 22px;
  }
  img {
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
    object-fit: cover;
  }
`
