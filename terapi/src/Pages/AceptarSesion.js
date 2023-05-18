import React, { useEffect, useState } from 'react'
import BackComponent from '../Components/BackComponent'
import pfp from '../Assets/badasspfp.png'
import calendario from "../Assets/calendario-circ.png";
import zoom from "../Assets/Vector-zoom.png";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AceptarSesion = () => {

    const {id} = useParams();

    const [sesion, setSesion] = useState({});
    const [fecha, setFecha] = useState({});
    const [usuario, setUsuario] = useState({});

    useEffect(()=>{
        const getSesion = async()=>{
            const {data} = await axios.get('http://localhost:4001/api/sesion/'+id);

            setSesion(data);
        }

        const getUsuario = async()=>{
            const {data} = await axios.get('http://localhost:4001/api/usuario/'+sesion.id_usuario);

            setUsuario(data);
        }

        const getFecha = async()=>{
            const {data} = await axios.get('http://localhost:4001/fecha/'+sesion.id_fecha);

            setFecha(data);
        }

        if(sesion._id === undefined){
            getSesion();
        }else{
            if(fecha._id === undefined) getFecha();
            if(usuario._id === undefined) getUsuario();

        }
    })

    const getFecha = ()=>{
        const date = new Date(fecha.fecha);
        var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        return(diasSemana[date.getDay()]+' '+date.getDate()+' de '+meses[date.getMonth()])
    }

    const aceptar = async()=>{
        const link = document.getElementById('link').value;

        if(link !== ''){
            const {data} = await axios.put('http://localhost:4001/api/sesion/'+id,{
                link: link,
                aceptado: true
            });
    
            window.history.back()
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar el link de la sesion'
              })
        }

    }

    const negar = async()=>{
            const {data} = await axios.delete('http://localhost:4001/api/sesion/'+id)
    
            window.history.back()
    }

    const getHoras = ()=>{
          const date = new Date(fecha.fecha);
          return `${date.getHours()}:${date.getMinutes()} - ${date.getHours()+1}:${date.getMinutes()}`
  }

  return (
    <div className="agenda--details__container">
      <BackComponent />
      <div className="details--component">
        <p>Terapia con {usuario.nombre}</p>
        <img src={pfp} alt="alejandro" />
      </div>
      <div className="details--hour__component">
        <img className="img--calendario" src={calendario} alt="calendario" />
        <div>
          <p className="dia">{getFecha()}</p>
          <p className="hora">{getHoras()}</p>
        </div>
      </div>
      <div className="agenda--details__window">
        <div className="agenda--details__window-info">
          <h1>Detalles</h1>
          <div className="inputtt">
            <div className="labbel">
            <img src={zoom} alt="sex" />
            <label for="reunion">
               Link de la sesión
            </label>
            </div>
            <input
                id='link'
                type="url"
                className="copyable-input"
                placeholder='Link de la sesion en Zoom o Meet'
                required
            />

            <input onClick={aceptar} id="button--submit" className="button--submit" type="submit" value="Aceptar" />
            <input onClick={negar} id="button--submit__red" className="button--submit__red" type="reset" value="Rechazar" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default AceptarSesion
