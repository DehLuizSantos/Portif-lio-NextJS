import {ContainerNavbar} from './styles'

import {Dropdown} from 'react-bootstrap';

import {GiUfo} from 'react-icons/gi'




const Navbar = () =>{
    
    return (
        <ContainerNavbar>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    <GiUfo />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#home"> Home</Dropdown.Item>
                    <Dropdown.Item href="#sobre">Sobre</Dropdown.Item>
                    <Dropdown.Item href="#projetos">Projetos</Dropdown.Item>
                    <Dropdown.Item href="#contato">Contato</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ContainerNavbar>
    )
}

export default Navbar