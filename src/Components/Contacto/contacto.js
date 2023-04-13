import React from 'react'

export const Contacto = () => {
  return (
    
  <div class="row">
  <div><img src="http://10.10.10.16:4087/wp-content/uploads/2020/11/Logo-exp-contempora-web01.png" class="img-fluid"></img></div>    
  <div class="col-md-8"><div>
    <p className='p'>Av. Victor A Belaunde 147
Vía principal 155, Torre Real 3, of 1102,
San Isidro
    </p>
    </div>
    <p><i class="fas fa-phone fa-3x"></i> 01 – 227 8400</p>
    <p><i class="fab fa-whatsapp fa-3x"></i> 989 271 924</p>
    <p><i class="far fa-envelope fa-3x"></i> contacto@expcontempora.com  </p>
    <i class="fab fa-facebook fa-3x"></i><i class="fab fa-instagram-square fa-3x"></i><i class="fab fa-linkedin fa-3x"></i>
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


