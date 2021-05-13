import { ContainerFooter } from './styles'

import { AiFillRocket } from 'react-icons/ai'

function Footer(){
    return(
        <ContainerFooter>
            <h2>Desenvolvido por: André Luiz Santos</h2>

            <a href="#home">
                <AiFillRocket />
            </a>

            
        </ContainerFooter>
    )
}

export default Footer