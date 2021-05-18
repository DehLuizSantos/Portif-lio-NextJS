import styled from 'styled-components'

export const ContainerAbout = styled.div`
  width:100rem;
  height:100%;
  
  h1{
    font-size:4rem;
  }  

  background:${props => props.theme.colors.background};

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  

  @media (max-width: 1080px){    
    height:300vh;
    h1{
      font-size:7rem;
    }

    .styles__TextDiv-sc-6ihkk4-1{
      height:52rem;
      width:85rem;

      h2{
        font-size:2rem;
      }
      span{
        font-size:2rem;
      }
      p{
        font-size:2rem;
      }
    }
  }
    
  @media (max-width: 770px){
    height:250vh;    
    h1{
      font-size:5rem;
    }
    .styles__TextDiv-sc-6ihkk4-1{
      height:80rem;
      width:85rem;

      h2{
        font-size:3rem;
      }
      span{
        font-size:3rem;
      }
      p{
        font-size:3rem;
      }
    }
    
  }
  
  @media (max-width: 512px){
    height:400vh;

    h1{
      font-size:7rem;
      margin-bottom:10rem;
    }

    .styles__TextDiv-sc-6ihkk4-1{
      height:100rem;
      width:85rem;

      h2{
        font-size:4rem;
      }
      span{
        font-size:3.5rem;
      }
      p{
        font-size:4rem;
      }
    
  }
    
    
  }
 
`;


export const TextDiv = styled.div`
  height:38rem;
  width: 55rem;
  border-radius: 30px;
  border: 2px solid #fff;
  
  

  background: ${props => props.theme.colors.black};
  padding: 2rem; 

  h2{
    display:inline;
    font-family: 'Fira Code', monospace;
    font-size: 1.2rem;
    color:#fff;
  }

  p{
    margin-left:2.5rem;
    font-size:1.2rem;
  }

  span{
    color: ${props => props.theme.colors.secundary};
    font-family: 'Fira Code', monospace;
    font-size: 1.2rem;
  }

  
  

`;



