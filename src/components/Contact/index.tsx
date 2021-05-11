import { 
    ContainerContact,
    ContainerBio,
    ContainerBioAlign,
    Perfil,
    RedesSociais,
    Historia } from './styles'

import { Container, Row, Col } from 'react-bootstrap';
import PerfilFoto from '../../assets/26166329_1581167325298368_406977316196417473_n.jpg'

import { 
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
    AiOutlineInstagram } from 'react-icons/ai';

import { FiMail } from 'react-icons/fi';

import { FaRocket } from 'react-icons/fa';

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
                                    <img src={PerfilFoto} width="350px" />
                                </Perfil>                         

                            
                                <RedesSociais>
                                    <a href="https://github.com/DehLuizSantos">
                                        <AiFillGithub />
                                    </a>

                                    <a href="https://www.linkedin.com/in/andr%C3%A9-luiz-844207102/">
                                        <AiFillLinkedin />
                                    </a>

                                    <a href="https://www.facebook.com/profile.php?id=100002153487792">
                                        <AiFillFacebook />
                                    </a>

                                    <a href="https://www.instagram.com/and_bas7/">
                                        <AiOutlineInstagram />
                                    </a>

                                    <a href="mailto:and_consul@outlook.com">
                                        <FiMail />
                                    </a>

                                    <a href="https://app.rocketseat.com.br/me/andconsul-1618803989456">
                                        <FaRocket />
                                    </a>
                                </RedesSociais>
                            </Col>

                            <Col>
                                <Historia>
                                    <p>
                                        Meu primeiro contato com a <span>programação</span> ocorreu
                                        quando eu tinha 13 anos, em um 
                                        <span> curso técnico</span> de informática, 
                                        onde eu e meus
                                        amigos fizemos um Otserver de um jogo chamado Tibía. Desde
                                        então eu sou apaixonado por está área. Atualmente, estou 
                                        trabalhando com freelances em <span>React/NodeJS</span>,
                                        fazendo APIs e
                                        sites para pequenos empreendedores, mas estou buscando 
                                        uma oportunidade como <span>desenvolvedor Front-end JR</span>.
                                    </p>
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