import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import logo from '../Images/logo-web.03.png';
import {} from '../NuestroSocio/nuestrosocio.css';

export default function NuestroSocio() {
  return (
    <>
       <div id='Transparencia'>
      <MDBRow className='mb-3'>
        <MDBCol md='8'>
          <img alt='img' src={logo} />
        </MDBCol>
        <MDBCol size='6' md='4'>
          <h1 className='h1'>23</h1>
          <h2 className='h2'>Años de experiencia.</h2>
          <p className='p'>Creando soluciones financieras que nos permitan construir relaciones de largo plazo con nuestros clientes.</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-3'>
        <MDBCol size='6' md='4'>
        <h1 className='h1'>6</h1>
          <h2 className='h2'>Áreas de Negocio.</h2>
          <p className='p'>Factoring, Conforming, Leasing, Corredora de Bolsa de Productos, Seguros Generales y Servicios inmobiliarios.</p>
        </MDBCol>{' '}
        <MDBCol size='6' md='4'>
        
          <h1 className='h2'>PRESENCIA A NIVEL NACIONAL E INTERNACIONAL.</h1>
          <h1 className='h1'>6</h1>
          <p className='p1'>Sucursales en Chile</p>
          <p className='p'>Antofagasta, La Serena, Viña, Santiago, Rancagua, Talca, Concepción, Temuco y Puerto Montt.</p>
        </MDBCol>{' '}
        <MDBCol size='6' md='4'>
        <h1 className='h1'>+500</h1>
          <h2 className='h2'>CLIENTES ACTIVOS.</h2>
          <p className='p'>Operando a través de nuestros distintos productos y canales de atención.</p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size='6' md='4'>
        <h1 className='h1'>+6000</h1>
          <h2 className='h2'>PÓLIZAS EMITIDAS.</h2>
          <p className='p'>Por Contempora Compañía de Seguros Generales.</p>
        </MDBCol>
        <MDBCol size='6' md='4'>
        <h1 className='h1'>+62</h1>
          <h2 className='h2'>MILIONI DI DOLARE.</h2>
          <p className='p'>EN COLOCACIONES.</p>
        </MDBCol>
        <MDBCol size='6'md='4'>
        <h1 className='h1'>+26</h1>
          <h2 className='h2'>MILIONI DI DOLARE.</h2>
          <p className='p'>En pólizas emitidas.</p>
        </MDBCol>
      </MDBRow>
      </div>
    </>
  );
}