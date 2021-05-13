import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 75rem;
  height: 100vh;

  background-color: ${props => props.theme.colors.background};

  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  font-size: 2rem;

  h2{
    font-size: 5rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 9rem;
    font-family: 'Fira Code', monospace;
    

    span{
    color: #fff;
    font-size:3rem;
    }

  }
  p{
    margin-top: 2rem;
    margin-bottom:10rem;
    font-size: 3rem;
    color:${props => props.theme.colors.secundary};
    }

  @media (min-width: 1080px){
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
  @media (min-width: 512px){
    h2{
        font-size: 2.5rem;   
    }
    p{
      font-size: 2rem;
    }
    span{
      font-size:2rem;
    }
  }


`;