import React from 'react'
import icono1 from '../Images/ico-teelfon.png'
import icono2 from '../Images/ico-wassap-50x50.png'
import icono3 from '../Images/icno-mail-1.png'
import iconoface from '../Images/icono-face.png'
import iconoinsta from '../Images/icono-insta.png'
import iconolink from '../Images/icono-linkedln.png'
export const Contacto = () => {
  return (
    
  <div id='Contacto' class="row">
  <div><img src="http://10.10.10.16:4087/wp-content/uploads/2020/11/Logo-exp-contempora-web01.png" class="img-fluid"></img></div>    
  <div class="col-md-8"><div>
    <p className='p'>Av. Victor A Belaunde 147
Vía principal 155, Torre Real 3, of 1102,
San Isidro
    </p>
    </div>
    <p><img src={icono1}></img> 01 – 227 8400</p>
    <p><img src={icono2}></img> 989 271 924</p>
    <p><img src={icono3}></img> contacto@expcontempora.com  </p>
    <img src={iconoface}></img><img src={iconoinsta}></img><img src={iconolink}></img>
    </div>
  <div class="col-md-4">

<div class="form-outline mb-4">
  <input type="text" id="form7Example1" class="form-control" />
  <label class="form-label" for="form7Example1">Tu nombre (obligatorio)</label>
</div>
<div class="form-outline mb-4">
  <input type="number" id="form7Example2" class="form-control" />
  <label class="form-label" for="form7Example2">Tu teléfono (obligatorio)</label>
</div>
<div class="form-outline mb-4">
  <input type="email" id="form7Example2" class="form-control" />
  <label class="form-label" for="form7Example2">Tu correo electrónico (obligatorio)</label>
</div>
<div class="form-outline mb-4">
  <input type="text" id="form7Example2" class="form-control" />
  <label class="form-label" for="form7Example2">Tu mensaje</label>
</div>
</div>
</div>
  )

  
}


