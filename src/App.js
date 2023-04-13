import './App.css';
import Navbar from './Components/Navbar/navbar';
import Confirming from './Components/Confirming/confirming';
import Factoring from './Components/Factoring/factoring';
import { Header } from './Components/Header/header';
import { Hover } from './Components/Hover1/hover';
import NuestroSocio, {} from './Components/NuestroSocio/nuestrosocio';
import {Nosotros} from './Components/Nosotros/nosotros';
import { Baner } from './Components/banner/baner';
import Valores from './Components/Valores/valores';
import { Certificaciones } from './Components/Certificaciones/certificaciones';
import { Baner2 } from './Components/banner2/banner2';
import { Contacto } from './Components/Contacto/contacto';
import { Footer } from './Components/Footer/footer';
import Boton from './Components/boton/boton';

 export default function App() {
  return (
    <div className='App' >
      <Header/>
      <Navbar/>
      <Hover/>
      <div >
      <h1>Confirming</h1>
      <Confirming/>
      <h1>Factoring</h1>
      <Factoring/>
      </div>
      <div>
       <h1>Nosotros</h1>
      <Nosotros/>
      </div>
      <div>
      <h1>Nuestro Socio</h1>
      </div>
      <NuestroSocio/>
      <Baner/>
      <h1>Valores</h1>  
      <Valores/>
      <h1>Certificaciones</h1>
      <Certificaciones/>
      <Baner2/>
      <Contacto/>
      <Footer/>
      <Boton/>
      
    </div>
  );
}


