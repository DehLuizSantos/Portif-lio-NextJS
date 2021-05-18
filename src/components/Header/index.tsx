import { ContainerHeader } from "./styles";

import { AlignDivider, Divider } from '../../styles/styled-divider'


import { RiAliensFill } from 'react-icons/ri';


function Header(){
  return(
    <ContainerHeader id="home">
        <h2><span>&lt;</span> André Luiz Santos <span> /&gt;</span></h2>
        <p>Desenvolvedor Front-end de outro mundo</p>

      <AlignDivider>
        <RiAliensFill /> 
          <Divider />              
      </AlignDivider>   
          
    </ContainerHeader>
    
  )
}

export default Header
