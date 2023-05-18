 import React, { useEffect, useState } from 'react';
import BackComponent from '../Components/BackComponent';
import '../Styles/therapistProfile.css'
import bgpfp from '../Assets/badasspfp-doc.png'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function TherapistProfile() {

  const {id_fecha} = useParams();
  const [fecha, setFecha] = useState({});
  const [terapist, setTerapist] = useState({});
  const [date, setDate] = useState(new Date());
  const [nombre, setNombre] = useState('el terapeuta');

  const usuario = JSON.parse(localStorage.getItem('usuario'));

  useEffect(()=>{
    const getFecha = async()=>{
      const {data} = await axios.get('http://localhost:4001/fecha/'+id_fecha);

      setFecha(data);
      setDate(new Date(data.fecha))
    }

    const getTerapist = async()=>{
      const {data} = await axios.get('http://localhost:4001/api/terapeuta/'+fecha.id_terapist);

      setTerapist(data);
      setNombre(data.nombre.split(' ')[0])
    }

    if(fecha._id === undefined) getFecha()
    else 
      if(terapist._id === undefined) getTerapist()
  })

  const agendar = async(e)=>{
    const {data} = await axios.post('http://localhost:4001/api/sesion',{
      id_usuario: usuario._id,
      id_terapeuta: terapist._id,
      id_fecha: id_fecha
    })
    Swal.fire({
      icon: 'success',
     
      text: `Solicitaste una sesión con ${terapist.nombre}. Cuando tu cita sea aceptada aparecera en tu agenda`,

    })
    console.log(data);
    e.target.disabled = true;
  }

  return (
    <div className='terapeuta--perfil__container'>
        <BackComponent/>
        <div className='center--image__container'>
        <img className='badassimg' src={bgpfp} alt='foto del terapeuta'/>
        </div>
        <div className='white--background__card'>
         <div className='content--card'>
         <h1 className='nombre--terapeuta'>{terapist.nombre}</h1>
          <p className='cedula--profesional'>Cedula: {terapist.cedula}</p>
          <div className='terapist--expertice'>
            <span>{terapist.especializacion}</span>

          </div>
          <div className='about--terapist'>
              <p className='about--title'>Acerca de tu especialista:</p>
              <p className='about--content'>{terapist.descripcion}</p>
        

          </div>

          <div className='about--terapist'>
              <p className='about--title'>Horario:</p>
              
              <div className='horarioss'>
              <span id='checked'>{`${date.getHours()}:${date.getMinutes()}`}</span>
              </div>

          </div>

          <div className='cagada-fix'>
          <Link onClick={agendar} id='button-bottom-agenda'>Agendar sesión con {nombre}</Link>
          
          </div>
          
           
         </div>
        
        </div>
        
    </div>
  )
}
