import { ContainerHeader } from "./styles";

import { Divider } from '../../styles/styled-divider'


import { RiAliensFill } from 'react-icons/ri';


function Header(){
  return(
    <ContainerHeader>
        <h2><span>&lt;</span> André Luiz Santos <span> /&gt;</span></h2>
        <p>Desenvolvedor Front-end de outro mundo</p>


        <RiAliensFill /> 
          <Divider />
                
             

    </ContainerHeader>
    
  )
}

export default Header
