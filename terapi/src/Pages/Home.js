import React, { useEffect, useState } from 'react';
import TopTextComponent from '../Components/TopTextComponent';
import Navbar from '../Components/Navbar';
import TerapeutasComponent from '../Components/TerapeutasComponent';
import axios from 'axios';
import '../Styles/btnFecha.component.css';
import { Link } from 'react-router-dom';
import pfp from '../Assets/badasspfp-doc.png'

export default function Home() {
  const title = 'Terapia en linea';
  const subtitle = 'Habla con un terapeuta en cualquier lugar totalmente gratis';

  const [fechas, setFechas] = useState([]);
  const [terapeutas, setTerapeutas] = useState([]);

  useEffect(()=>{
    const getTerapeutas = async()=>{
      const {data} = await axios.get('http://localhost:4001/api/terapeuta');

      setTerapeutas(data)
    }

    if(terapeutas.length === 0) getTerapeutas();
  })

  const asdgjkl = async(e)=>{
    const {value} = (e.target);
    const {data} = await axios('http://localhost:4001/fecha/fecha/'+value);

    setFechas(data);
  }

  const hayFechas = ()=>{
    if(fechas.length === 0)
      return <p style={{textAlign: 'center'}}><br/>Lo sentimos no hay disponibilidad este dia<br/>Prueba con otra fecha</p>
  }

  const nombreTerapeuta = (id)=>{    
    var name = '';
    terapeutas.map((t)=>{
      if(t._id === id)
        name = t.nombre;
    })

    return name;
  }

  const especialidadTerapeuta = (id)=>{    
    var name = '';
    terapeutas.map((t)=>{
      if(t._id === id)
        name = t.especializacion;
    })

    return name;
  }

  return (
    <div>
        <TopTextComponent title={title} subtitle={subtitle}/>
        <div className='btn--container'>
          <input id='btnFechaComponent' type='date' min="2018-01-01" onChange={asdgjkl} placeholder='Elige la fecha'/>
        </div>

        <div className='terapeutas--container'>
        
          <h2>Terapeutas para ti</h2>
          { hayFechas() }
          {
            fechas.map((f)=>{
              const date = new Date(f.fecha)
              return <Link to={'/terapeuta/perfil/'+f._id} className='card--terapeuta'>
                        <div className='imagen--container'>
                            <img src={pfp} alt='terapeuta' style={{width: 60}}></img>
                        </div> 
                        <div className='text--container'>
                            <p className='nombre--terapeuta' >{nombreTerapeuta(f.id_terapist)}</p>
                            <p className='especialidades--terapeuta'>{especialidadTerapeuta(f.id_terapist)}</p>
                            <p id='fechas--terapeuta'>Fecha: {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`} </p>
                            <p id='fechas--terapeuta'>Hora: {`${date.getHours()}:${date.getMinutes()}`} </p>
                        </div>
                    </Link>
            })
          }
        
        </div>

        <br/><br/><br/>
        <Navbar/>
    </div>
   
  )
}
