import { Container, Row, Col, Card } from 'react-bootstrap'

import { ContainerProjects, ContainerCard, AlignButton } from './styles'

import { GiAlienStare } from 'react-icons/gi'

import Ufo from '../../assets/ufo.svg'

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
                            <ContainerCard>
                            <AlignButton>                               
                                <a href="">teste</a>                               
                           </AlignButton>
                        </ContainerCard>
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
                <GiAlienStare />
                <Divider />
            </AlignDivider>

        </ContainerProjects>
        
    )
}

export default Projects