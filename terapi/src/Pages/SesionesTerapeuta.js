import React, { useEffect, useState } from 'react'
import TopTextComponent from '../Components/TopTextComponent';
import { Link } from 'react-router-dom';
import pfp from '../Assets/badasspfp.png'
import axios from 'axios';
import agenda from '../Assets/agenda-icon.svg';
import chat from '../Assets/chat-icon.svg';
import homeIco from '../Assets/home-icon.svg';
import usr from '../Assets/user-alt.svg'

const SesionesTerapeuta = () => {

    const [sesiones, setSesiones] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [fechas, setFechas] = useState([])
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    useEffect(()=>{
        const getSesiones = async()=>{
            const {data} = await axios.get('http://localhost:4001/api/sesion');
            const aux = [];

            data.map((d)=>{
                if(d.id_terapeuta === usuario._id && d.aceptado !== true)
                    aux.push(d)
            })

            setSesiones(aux)
        }

        const getUsuarios = async()=>{
            const {data} = await axios.get('http://localhost:4001/api/usuario');

            setUsuarios(data)
        }

        const getFechas = async()=>{
            const {data} = await axios.get('http://localhost:4001/fecha')
            const aux = [];

            data.map((d)=>{
                if(d.id_terapist === usuario._id)
                    aux.push(d);
            })

            setFechas(aux);
        }

        getSesiones();
        if(usuarios.length === 0) getUsuarios();
        if(fechas.length === 0) getFechas();
        
            
    })

    const getDiaSemana = (id_fecha)=>{
        var fecha ;
        fechas.map((f)=>{
            if(f._id === id_fecha)
                fecha = f;
        })

        if(fecha !== undefined){
            const date = new Date(fecha.fecha);
            const diasSem = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
            return diasSem[date.getDay()]
        }
    }

    const getDia = (id_fecha)=>{
        var fecha ;
        fechas.map((f)=>{
            if(f._id === id_fecha)
                fecha = f;
        })

        if(fecha !== undefined){
            const date = new Date(fecha.fecha);
            return date.getDate()
        }
    }

    const getHoras = (id_fecha)=>{
        var fecha ;
        fechas.map((f)=>{
            if(f._id === id_fecha)
                fecha = f;
        })

        if(fecha !== undefined){
            const date = new Date(fecha.fecha);
            return `${date.getHours()}:${date.getMinutes()} - ${date.getHours()+1}:${date.getMinutes()}`
        }
    }

    const getNombre = (id_usuario)=>{
        var nombre;
        usuarios.map((u)=>{
            if(u._id === id_usuario)
                nombre = u.nombre.split(' ')[0];
        })

        return nombre
    }


    const mensajeVacio = ()=>{
        if(sesiones.length === 0)
            return <p>No hay solicitudes de sesiones pendientes</p>
    }

  return (
    <div>
        <TopTextComponent title={'Peticiones de sesiones'} subtitle={'Acepta o rechaza sesiones'}/>

        <div id="containerrr">

        {mensajeVacio()}

        {
            sesiones.map((s)=>{
                return <div onClick={()=>{window.location.href = '/aceptar/sesion/'+s._id}} className="agenda--item">
                            <div className="agenda--text__left">
                            <p className="day--text">{getDiaSemana(s.id_fecha)}</p>
                            <p className="day--number">{getDia(s.id_fecha)}</p>
                            </div>
                            <div className="agenda--box">
                            
                            <div className="row-1">
                                <div className="row-2">
                                <p>Terapia con {getNombre(s.id_usuario)}</p>
                                <div className="agenda--pfp">
                                <img style={{width: 50}} src={pfp} alt="caca" />
                            </div>
                                </div>
                                <p>{getHoras(s.id_fecha)}</p>
                            </div>
                            </div>
                        </div>
            })
        }


        
      </div>

      <div className='parenttt'>
        <div className='navbar--container'>
            <Link id='homeIcon' className='icon--active' to={'/home/treapeuta'}><img src={homeIco} alt='inicio'></img></Link>
            <Link id='agendaIcon' className='icon--off'  to={'/sesiones/terapeuta'}><img src={agenda} alt='agenda'></img></Link>
            <Link id='usrIcon' className='icon--off'  to={'/perfil'}><img src={usr} alt='agenda'></img></Link>

        </div>
    </div>

    </div>
  )
}

export default SesionesTerapeuta
