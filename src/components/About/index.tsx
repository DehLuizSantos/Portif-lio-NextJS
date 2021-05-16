import { ContainerAbout, TextDiv } from "./styles"
import {Container, Row,Col} from 'react-bootstrap'

import  { Divider, AlignDivider}  from '../../styles/styled-divider'
import { FaRedditAlien } from 'react-icons/fa'

import Alien from '../../assets/laurent_little_green_alien.svg'

function About(){
  return(
    <ContainerAbout id="sobre">


        <h1>Sobre</h1>

      <Container fluid>
          <Row>
            

            <Col  xs={12} className="d-flex justify-content-center align-content-center">
              <TextDiv>
                  <h2>"sobre"</h2> <span> = </span> <span>&#123;</span> 
                  <p>"nome" <span>:</span> "André Luiz Santos"</p>
                  <p>"estado"<span>:</span> "São Paulo / SP" </p>
                  <p>"idade" <span>:</span> 29</p>
                  <p><span>&#125;</span></p>

                  <h2>"formação"</h2><span> = </span> <span>&#123;</span>
                  <p><span>&#91;</span> "superior completo", "técnico em informatica", 
                  "pôs graduação em desenvolvimento web" <span>&#93;</span></p>
                  <p><span>&#125;</span></p>

                  <h2>"stack" </h2><span>=</span> <span>&#123;</span>
                  <p><span>&#91;</span>"react", "nextJS", "typeScript","javaScript", 
                  "HTML", "CSS", "SCSS"<span>&#93;</span></p>
                  <p><span>&#125;</span></p>
              </TextDiv>

              
            </Col>        
          
          </Row>

          <AlignDivider>
            <FaRedditAlien />
            <Divider />
          </AlignDivider>
          
      </Container>      

    </ContainerAbout>
  )
}

export default About
