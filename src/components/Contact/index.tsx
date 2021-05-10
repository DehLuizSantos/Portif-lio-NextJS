import { 
    ContainerContact,
    ContainerBio,
    ContainerBioAlign,
    Perfil,
    RedesSociais,
    Historia } from './styles'

import { Container, Row, Col } from 'react-bootstrap';

function Contact(){
    return(
        
        <ContainerContact>
            <h1>Contato</h1>

            <ContainerBioAlign>
                <ContainerBio>
                    <Container>
                        <Row>
                            <Col>
                                <Perfil>
                                    teste
                                </Perfil>                         

                            
                                <RedesSociais>
                                    teste
                                </RedesSociais>
                            </Col>

                            <Col>
                                <Historia>
                                    teste
                                </Historia>
                            </Col>
                        </Row>

                        
                    </Container>
                </ContainerBio>
            </ContainerBioAlign>   
        </ContainerContact>
    )
}

export default Contact