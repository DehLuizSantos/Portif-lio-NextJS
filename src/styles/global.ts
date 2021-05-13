import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    color: ${props => props.theme.colors.primary};
    font-family: 400 1rem "Fira Code", Sans-serif;
    background:${props => props.theme.colors.background};
  }

  h1{
    text-align: center;
    color: ${props => props.theme.colors.secundary};
    font-family: 'Fira Code', monospace;    

    font-size: 2rem;   
  }

  @media (max-width: 1080px){
    html{
        font-size: 93.75%; //15px
    }
}

  @media (max-width: 720px){
    html{
        font-size: 87.5%; //14px
  
    }
  }
  @media (max-width: 720px){
    html{
        font-size: 87.5%; //14px
  
    }
  }
`;





