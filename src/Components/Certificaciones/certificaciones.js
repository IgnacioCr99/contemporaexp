import React from 'react'
import certificado1 from '../Images/Certificaciones01.jpg'
import certificado2 from '../Images/Certificaciones02.jpg'
import { Row } from 'react-bootstrap'

export const Certificaciones = () => {
  return (
    <div>
    <div> 
    </div>
    
    <Row>
    <h2 className='h1'>Cavali</h2>
    <img src= {certificado1}></img>
    </Row>
    <Row>
    <h2 className='h1'>Superintendencia de Banca, Seguros y AFP</h2>
    <img src= {certificado2}></img>
    </Row>
   
    </div>
  )
}
