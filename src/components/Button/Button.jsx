
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Button = ({ myFunction, label }) => {

     label = 'Agregar al Carrito' ;

     return (
         <button onClick={myFunction} className='btn btn-primary'><strong>{label}</strong></button>
    )
 }

 export default Button