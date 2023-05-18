 import React, { useEffect } from 'react';
import BackComponent from '../Components/BackComponent';
import '../Styles/therapistProfile.css'
import bgpfp from '../Assets/badasspfp.png'
import {Link} from 'react-router-dom';

export default function Perfil() {

  const usuario = JSON.parse(localStorage.getItem('usuario'));

  return (
    <div className='terapeuta--perfil__container'>
        <BackComponent/>
        <div className='center--image__container'>
        <img className='badassimg' src={bgpfp} alt='foto del terapeuta'/>
        </div>
        <div className='white--background__card'>
         <div className='content--card'>
         <h1 className='nombre--terapeuta'>{usuario.nombre}</h1>
          <div className='terapist--expertice'>

          </div>
          <div className='about--terapist'>
              <br/>
              <p className='about--title'>Correo: {usuario.correo}</p>
              <p className='about--title'>Telefono: {usuario.telefono}</p>


          </div>

          <div className='cagada-fix'>
          <Link id='button-bottom-agenda' to='/logout'>Cerrar Sesion</Link>
          
          </div>
          
           
         </div>
        
        </div>
        
    </div>
  )
}
