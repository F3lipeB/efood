import styled from 'styled-components'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 384px;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-top: 64px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  width: 539px;
  text-align: center;
`
