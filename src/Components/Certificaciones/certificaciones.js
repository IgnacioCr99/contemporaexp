import React from 'react'
import certificado1 from '../Images/Certificaciones01.jpg'
import certificado2 from '../Images/Certificaciones02.jpg'
import { Col, Row } from 'react-bootstrap'

export const Certificaciones = () => {
  return (
    <div>
    
    
    <Row>
      <Col md={4}>
    <h2 className='h1'>Cavali</h2>
    <img className='img' src= {certificado1}></img>
      </Col>
      <Col md={8}>
    <h2 className='h1'>Superintendencia de Banca, Seguros y AFP</h2>
    <img src= {certificado2}></img>
    </Col>
    </Row>
   
    </div>
  )
}
