import React from "react"
import './navbar.css'
import logo from '../Images/Logo-exp-contempora-web.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
   
     
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="top-0 start-0" href="#home"> 
          <img
              src={logo}
              width="395 px"
              height="75 px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <Nav.Link href="#home">Transparencia</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
  );
}

export default ColorSchemesExample;