import {} from '../Nosotros/nosotros.css';
import data from "../Data/nosotrosdata";

import React from 'react'

export const Nosotros = () => {
  return (
    
    <div class="container text-center">  
  
      
       {data.map((item) => (
      <div key={item.id} className="card">
        <img src={item.imageUrl} alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.cargo}</p>    
        </div>
      </div>
    ))}
    </div>

      );
    }










