import { Container, Row, Col, Card } from 'react-bootstrap'

import { ContainerProjects, ContainerCard, AlignUfos } from './styles'

import Ufo from '../../assets/ufo.svg'

 
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

        </ContainerProjects>
    )
}

export default Projects