import styled from 'styled-components'

export const ContainerAbout = styled.div`
  width:75rem;
  height: 120vh;
  

  background:${props => props.theme.colors.background};
 
`;

export const AlignAlien = styled.div`
  width: 30rem;
  margin-top: 2rem; 
  

  @media (max-width: 1080px){
    width:35rem;
    
    
  @media (max-width: 720px){
    width:30rem;
  }
  }
  @media (max-width: 512px){
    width:28rem;
    
  }
`

export const TextDiv = styled.div`
  height:36rem;
  width: 31rem;
  border-radius: 30px;
  border: 2px solid #fff;
  margin-top:1.8rem;

  background: ${props => props.theme.colors.black};
  padding: 1.8rem; 

  @media (max-width: 1080px){
    width:36rem;
    height:31rem;
  }
    
  @media (max-width: 720px){
    width:28rem;
    height:28rem;
  }
  
  @media (max-width: 512px){
    width:28rem;
    height:30rem;
  }
  
  h2{
    display:inline;
    font-family: 'Fira Code', monospace;
    font-size: 1.3rem;
  }

  p{
    margin-left:1.5rem;
  }

  span{
    color: ${props => props.theme.colors.secundary};
    font-family: 'Fira Code', monospace;
    font-size: 1rem;
  }


`;



