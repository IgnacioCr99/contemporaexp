import React from "react"
import './navbar.css'
import logo from '../Images/Logo-exp-contempora-web.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";
import { NavLink } from "react-bootstrap";

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
          <NavLink>
            <Link 
            
            activeClass="active"
            to="Inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Inicio</Link>
          </NavLink>
          <NavLink>
            <Link 
            activeClass="active"
            to="Servicios"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Servicios</Link>
          </NavLink>
<NavLink>
<Link 
            activeClass="active"
            to="Nosotros"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Nosotros</Link>
</NavLink>
<NavLink>
<Link 
            activeClass="active"
            to="Transparencia"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Transparencia</Link>
</NavLink>
<NavLink>
<Link 
            activeClass="active"
            to="Contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Contacto</Link>          
</NavLink>           
          </Nav>

        </Container>
      </Navbar>
   
  );
}

export default ColorSchemesExample;