import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './style.css';

class NavbarMenu extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
                <Navbar className='menu' bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className='link' href="/home"><p>Agência Viagem</p></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" >

                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}  navbarScroll>
                            <Nav.Link className='menuLink' href="/home">Início</Nav.Link>
                            <Nav.Link className='menuLink' href="/add-usuario/_add">Cadastrar</Nav.Link>
                            <Nav.Link className='menuLink' href="/promocoes">Promoções</Nav.Link>
                            <Nav.Link className='menuLink' href="/contato">Contato</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}

export default NavbarMenu