import React, { useEffect, useState } from 'react'
import TopTextComponent from '../Components/TopTextComponent'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import agenda from '../Assets/agenda-icon.svg';
import chat from '../Assets/chat-icon.svg';
import homeIco from '../Assets/home-icon.svg';
import usr from '../Assets/user-alt.svg'

const HomeTerapeuta = () => {

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    const [fechas, setFechas] = useState([]);

    useEffect(()=>{
        const getFechas = async()=>{
            const {data} = await axios.get('http://localhost:4001/fecha')
            const aux = [];

            data.map((d)=>{
                if(d.id_terapist === usuario._id)
                    aux.push(d);
            })

            setFechas(aux);
        }

        getFechas();
    })

    const addDate = async()=>{
        const date = document.getElementById('btnFechaComponent').value;
        console.log(date);

        if(date === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes poner una fecha',
              })
        }else{
            const {data} = await axios.post('http://localhost:4001/fecha',{
                id_terapist: usuario._id,
                fecha: date
            })

            console.log(data);
        }
    }

    const eliminar = async(id)=>{
        Swal.fire({
            title: 'Eliminar fecha?',
            showDenyButton: true,
            confirmButtonText: 'No Borrar',
            denyButtonText: `Borrar`,
          }).then(async(result) => {
                if (result.isConfirmed) {
            } else if (result.isDenied) {
                const {data} = await axios.delete('http://localhost:4001/fecha/'+id)
            }      
          })
    }
const tittle = 'Home terapeuta';
const subtittle = 'Presiona el boton de abajo y agrega todas las fechas y horas que tengas disponibles para dar terapia a estudiantes '
  return (
    <div>
        <TopTextComponent title={tittle} subtitle={subtittle}/>
        <div className='btn--container'>
            <input id='btnFechaComponent' type='datetime-local' min="2018-01-01" placeholder='Elige la fecha'/>
        </div>
        <br/>
        <div className='btn--container'>
            <Link id='button-bottom-agenda' onClick={addDate}>Agregar Día</Link>
        </div>

        {
            fechas.map((f)=>{
                const date = new Date(f.fecha);
                return <div className='btn--container'>
                        <Link onClick={()=>{eliminar(f._id)}} className='card--terapeuta'>
                            <div className='text--container'>
                                <p className='nombre--terapeuta' >{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</p>
                                <p className='especialidades--terapeuta'>{`${date.getHours()}:${date.getMinutes()}`}</p>
                            </div>
                        </Link>
                </div>

            })
        }

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

export default HomeTerapeuta
