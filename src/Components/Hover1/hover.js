
import React from 'react';
import Hero1 from '../Images/AdobeStock_267219352.jpg'
import {} from '../Hover1/hover.css'
export const Hover = () => {
  return (

  <div id="Inicio">
      <source media="(min-width: 0px)" srcSet={Hero1} />
      <img className='image' src={Hero1} alt="Hero1" />
      
   
    <h1 className='header' >Brindamos soluciones financieras integrales e
innovadoras, para las necesidades de Capital
de trabajo de su empresa</h1>
</div>

    
  )
}
