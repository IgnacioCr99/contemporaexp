import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import icono1 from '../Images/icono01-e1604887027385.png'
import icono2 from '../Images/icono02.png';
import icono3 from '../Images/icono03.png';
import icono4 from '../Images/icono04.png';

function Valores() {
  return (
    
    <Container>
      <Row>
        <Col>
          <img src={icono1}></img>
        
        <h1 className='h1'>Equipo</h1>
        <p>Contamos con el mejor equipo humano del sector. Promovemos el trabajo colaborativo en el que cada uno  aporte excelencia, conocimientos, capacidades y talentos para tener el mejor lugar de trabajo de la industria.</p>
        </Col>
        <Col> <img src={icono2}></img>
        <h1 className='h1'>Integridad</h1>
        <p>Actuamos correcta y transparentemente hacia nuestros clientes y la comunidad en general.</p></Col>
        <Col>
        <img src={icono3}></img>
        <h1 className='h1'>Cliente Centrico</h1>
        <p>Nuestros clientes son la base de la organización. Trabajamos para que se logren sus objetivos y generemos relaciones de largo plazo.</p>
        </Col>
        <Col>
        <img src={icono4}></img>
        <h1 className='h1'>Soluciones Innovadoras</h1>
        <p>Nuestro desafío es proveer las mejores soluciones a las necesidades financieras de nuestros clientes, buscando superar sus expectativas.</p>
        </Col>
      </Row> 
      </Container>
    
  );
}
export default Valores;