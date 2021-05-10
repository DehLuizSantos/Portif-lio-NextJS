import styled from 'styled-components'

export const ContainerAbout = styled.div`
  width:100%;
  height: 120vh;
  

  background:${props => props.theme.colors.background};
 
`;

export const AlignAlien = styled.div`
  height: 550px;
  width:450px;
  margin-top: 30px;
`

export const TextDiv = styled.div`
  height:580px;
  width: 530px;
  border-radius: 30px;
  margin-top:30px;

  background: ${props => props.theme.colors.black};
  padding: 30px; 
  
  h2{
    display:inline;
    font-family: 'Fira Code', monospace;
    font-size: 22px;
  }

  p{
    margin-left:50px;
  }

  span{
    color: ${props => props.theme.colors.secundary};
    font-family: 'Fira Code', monospace;
    font-size: 22px;
  }


`

