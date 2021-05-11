import { Container, Row, Col, Card } from 'react-bootstrap'

import { ContainerProjects, ContainerCard, AlignUfos } from './styles'

import { GiAlienStare } from 'react-icons/gi'

import Ufo from '../../assets/ufo.svg'

import { AlignDivider, Divider } from '../../styles/styled-divider'

 
function Projects(){
    return(
        <ContainerProjects>
            <h1>Últimos Projetos</h1>

            <Container>
                <Row>
                    <Col>
                       <ContainerCard>
                           <AlignUfos>
                               <Ufo />
                           </AlignUfos>
                       </ContainerCard>                                        
                    </Col>

                    <Col>
                        <ContainerCard>
                            teste
                        </ContainerCard>
                    </Col>

                    <Col>
                        <ContainerCard>
                            <Ufo />
                        </ContainerCard>
                    </Col>
                </Row>

                <Row>
                    <Col>
                       <ContainerCard>
                           teste
                       </ContainerCard>                                        
                    </Col>

                    <Col>
                        <ContainerCard>
                            <Ufo />
                        </ContainerCard>
                    </Col>

                    <Col>
                        <ContainerCard>
                            teste
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