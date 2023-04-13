import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Valores() {
  return (
    
    <MDBContainer>
    <div> 
      <MDBRow className='mb-3'>
        <MDBCol size='4'>
        <i class="fas fa-users fa-5x"></i>
        <h1 className='h1'>Equipo</h1>
        <p>Contamos con el mejor equipo humano del sector. Promovemos el trabajo colaborativo en el que cada uno  aporte excelencia, conocimientos, capacidades y talentos para tener el mejor lugar de trabajo de la industria.</p>
        </MDBCol>
        <MDBCol size='4'>
        <i class="fas fa-shield fa-5x"></i>
        <h1 className='h1'>Integridad</h1>
        <p>Actuamos correcta y transparentemente hacia nuestros clientes y la comunidad en general.</p>
        </MDBCol>
        <MDBCol size='4'>
        <i class="fas fa-map-pin fa-5x"></i>
        <h1 className='h1'>Cliente Centrico</h1>
        <p>Nuestros clientes son la base de la organización. Trabajamos para que se logren sus objetivos y generemos relaciones de largo plazo.</p>
        </MDBCol>
      </MDBRow>
      </div> 
    </MDBContainer>
  );
}