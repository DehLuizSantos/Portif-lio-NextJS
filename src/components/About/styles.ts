import styled from 'styled-components'

export const ContainerAbout = styled.div`
  width:75rem;
  height: 100vh;
  

  background:${props => props.theme.colors.background};

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  @media (max-width: 1080px){    
    
  }
    
  @media (max-width: 720px){
    
    
  }
  
  @media (max-width: 512px){
    
    
  }
 
`;



export const TextDiv = styled.div`
  height:32rem;
  width: 50rem;
  border-radius: 30px;
  border: 2px solid #fff;
  margin-top:1.8rem;

  background: ${props => props.theme.colors.black};
  padding: 2rem; 

  h2{
    display:inline;
    font-family: 'Fira Code', monospace;
    font-size: 1.7rem;
    color:#fff;
  }

  p{
    margin-left:2rem;
  }

  span{
    color: ${props => props.theme.colors.secundary};
    font-family: 'Fira Code', monospace;
    font-size: 1.2rem;
  }

  @media (max-width: 1080px){    
    margin-top:1rem;
    margin-bottom:1rem;
  }
    
  @media (max-width: 720px){
    
  }
  @media (max-width: 512px){
    
  }
  

`;



