import React from 'react';
import pfp from '../Assets/pfp.png';
import '../Styles/terapeutas.component.css';
import {Link} from 'react-router-dom';

export default function TerapeutasComponent() {
  return (
    <div className='terapeutas--container'>
        <h2>Terapeutas para ti</h2>
        <Link to={'/terapeuta/perfil'} className='card--terapeuta'>
            <div className='imagen--container'>
                <img src={pfp} alt='terapeuta'></img>
            </div> 
            <div className='text--container'>
                <p className='nombre--terapeuta' >Alejandro de padua</p>
                <p className='especialidades--terapeuta'>Depresión - Ansiedad - Traumas</p>
                <p id='fechas--terapeuta'>Proxima fecha disponible: Hoy</p>
            </div>
        </Link>
        <Link to={'/home'} className='card--terapeuta'>
            <div className='imagen--container'>
                <img src={pfp} alt='terapeuta'></img>
            </div> 
            <div className='text--container'>
                <p className='nombre--terapeuta' >Alejandro de padua</p>
                <p className='especialidades--terapeuta'>Depresión - Ansiedad - Traumas</p>
                <p id='fechas--terapeuta'>Proxima fecha disponible: Hoy</p>
            </div>
        </Link>
        <Link to={'/home'} className='card--terapeuta'>
            <div className='imagen--container'>
                <img src={pfp} alt='terapeuta'></img>
            </div> 
            <div className='text--container'>
                <p className='nombre--terapeuta' >Alejandro de padua</p>
                <p className='especialidades--terapeuta'>Depresión - Ansiedad - Traumas</p>
                <p id='fechas--terapeuta'>Proxima fecha disponible: Hoy</p>
            </div>
        </Link>
        <Link to={'/home'} className='card--terapeuta'>
            <div className='imagen--container'>
                <img src={pfp} alt='terapeuta'></img>
            </div> 
            <div className='text--container'>
                <p className='nombre--terapeuta' >Alejandro de padua</p>
                <p className='especialidades--terapeuta'>Depresión - Ansiedad - Traumas</p>
                <p id='fechas--terapeuta'>Proxima fecha disponible: Hoy</p>
            </div>
        </Link>
       
    </div>
  )
}
