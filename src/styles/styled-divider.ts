import styled from 'styled-components'



export const Divider = styled.span`
margin-top:1rem; 
width:30rem;
height:3px;

background-image: linear-gradient(90deg, #42FF00, #fff);


@media (max-width: 512px){
  width:40rem;
  height:5px;
  
}

`;

export const AlignDivider = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;  

  margin-top:2rem;
  font-size: 5rem; 


  @media (max-width: 1080px){    
    font-size: 5rem;
    
  @media (min-width: 720px){
    font-size:5rem;
  }
  @media (max-width: 512px){
    margin-top:10rem;
    font-size:7rem;
    
    
    
  }
  
}
`;

