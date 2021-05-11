import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    color: ${props => props.theme.colors.primary};
    font-family: 400 16px "Fira Code", Sans-serif;
    background:${props => props.theme.colors.background};
  }

  h1{
    text-align: center;
    color: ${props => props.theme.colors.secundary};
    font-family: 'Fira Code', monospace;       
  }

`;





