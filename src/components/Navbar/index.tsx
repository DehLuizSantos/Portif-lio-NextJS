import React, { useState } from 'react';

import { ContainerNavbar, ExpandNav, MenuFormater, NavItem } from './styles';

import {
    Container,
    Col,
    Row,
    Nav,
    NavbarBrand,
    NavLink
} from 'react-bootstrap';

import { GiUfo } from 'react-icons/gi'

const NavBar: React.FC = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    

    return (
        <ContainerNavbar>
          
            <Nav>
                <ExpandNav>
                    <Container>
                        <Row>
                            <Col md="6">
                                <Row>
                                    <NavbarBrand>
                                        < GiUfo />
                                    </NavbarBrand>
                                </Row>
                            </Col>
                            <Col md="6">
                                <Row>
                                    <MenuFormater>
                                        <NavItem>
                                            <NavLink href="#home">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#sobre">Sobre</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#projetos">Projetos</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#contato">Contato</NavLink>
                                        </NavItem>
                                    </MenuFormater>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </ExpandNav>
            </Nav>
        

        </ContainerNavbar>
    );
}

export default NavBar;
