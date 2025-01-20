import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFEBD9',
  preto: '#111',
  verde: '#10AC84',
  fundo: '#FFF8F2',
  fundoClaro: '#FFFFFF',
  rosa: ' #E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
