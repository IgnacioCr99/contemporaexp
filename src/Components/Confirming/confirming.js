
import Hero2 from '../Images/AdobeStock_40515377.jpg'
import {} from '../Factoring/factoring.css';
import {} from '../Confirming/confirming.css';
import logo from '../Images/AdobeStock_253708424.jpg';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


export default function Confirming() {
  
  
    const [open, setOpen] = useState(false);
  
    return (
      <Container>
        <div id='Servicios'>

</div>
     <img className='img w-50 p-3' src={Hero2}/>

  <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Qué Es?</Accordion.Header>
        <Accordion.Body>
        Gestionamos y pagamos las facturas de sus proveedores, permitiéndoles adelantar la fecha de cobro de sus facturas.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Cómo funciona?</Accordion.Header>
        <Accordion.Body>
        El cliente recibe las facturas por la compra de bienes y/o servicios.
El cliente envía a EXP Contempora la nómina de proveedores y facturas confirmadas.
EXP Contempora procesa la información y solicita la cesión de las facturas.
EXP Contempora paga a los proveedores.
EXP Contempora cobra al cliente al vencimiento de las facturas.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Propuesta de valor</Accordion.Header>
        <Accordion.Body>
        “Generamos eficiencias en sus procesos de pago y fortalecemos la relación con sus proveedores, colaborando en la consecución y sostenimiento de su ventaja competitiva.”
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
       </Container>
    );
}

