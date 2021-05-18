import { ContainerProjects, ContainerCard, AlignButton } from './styles'

import { Container, Col, Row } from 'react-bootstrap';

import { RiAliensFill } from 'react-icons/ri';

import { AlignDivider, Divider } from '../../styles/styled-divider'

 
function Projects(){


    return(
        <ContainerProjects id="projetos">
            
            <h1>Últimos Projetos</h1>

            <Container>
                <Row className='mainrow'>
                    <Col className='item-portfolio' md={4} xs={6}>
                       <ContainerCard>
                           <AlignButton>
                               <a href="">teste</a>
                           </AlignButton>
                       </ContainerCard>                                        
                    </Col>

                    <Col className='item-portfolio' md={4} xs={6}>
                        <ContainerCard>
                            <AlignButton>
                                <a href="">teste</a>
                           </AlignButton>
                        </ContainerCard>
                    </Col>

                    <Col className='item-portfolio' md={4} xs={6}>
                        <ContainerCard>
                            <AlignButton>                               
                                <a href="">teste</a>                               
                           </AlignButton>
                        </ContainerCard>
                    </Col>
                
                    <Col className='item-portfolio' md={4} xs={6}>
                       <ContainerCard>                            
                            <AlignButton>                               
                                <a href="">teste</a>                               
                           </AlignButton>                        
                       </ContainerCard>                                        
                    </Col>

                    <Col className='item-portfolio' md={4} xs={6}>
                        <ContainerCard>
                            <AlignButton>
                               <a href="">teste </a>
                           </AlignButton>                           
                        </ContainerCard>
                    </Col>

                    <Col className='item-portfolio' md={4} xs={6}>
                        <ContainerCard>
                            <AlignButton>
                                <a href="">teste</a>
                           </AlignButton>
                        </ContainerCard>
                    </Col>
                </Row>
                
            </Container>
            <AlignDivider>
                <RiAliensFill /> 
                <Divider />                
            </AlignDivider>



        </ContainerProjects>
        
    )
}

export default Projects