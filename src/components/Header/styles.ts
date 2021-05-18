import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100rem;
  height: 120vh;  

  background-color: ${props => props.theme.colors.background};

  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;

  font-size: 2rem; 
 

  h2{
    font-size: 5rem;
    color: ${props => props.theme.colors.primary};    
    font-family: 'Fira Code', monospace;
    

    span{
    color: #fff;
    font-size:2rem;
    }

  }
  p{
    padding:2rem;    
    font-size: 3rem;
    color:${props => props.theme.colors.secundary};
    }

  @media (max-width: 1080px){
    height:250vh;
    
    h2{
        font-size: 4.5rem;
    }
    p{
      font-size: 3.5rem;
    }
    span{
      font-size:4rem;
    }
    
  @media (min-width: 720px){
    height:200vh;
    
    h2{
        font-size: 4rem; 
    }
    p{
      font-size: 3rem;
    }
    span{
      font-size:4rem;
    }
  }
  }
  @media (max-width: 512px){
    
    height:400vh;
    
  
    h2{
        font-size: 4.5rem;   
      
      span{
      font-size:4rem;
    }
    }
    p{
      font-size: 4rem;
      text-align:center;
    }
    
  }


`;