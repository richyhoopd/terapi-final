import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pfp from "../Assets/badasspfp-doc.png";
import "../Styles/agenda.component.css";
import axios from "axios";

export default function AgendaItemComponent() {

  const [sesiones, setSesiones] = useState([]);
    const [terapistas, setTerapistas] = useState([]);
    const [fechas, setFechas] = useState([])
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    useEffect(()=>{
        const getSesiones = async()=>{
            const {data} = await axios.get('http://localhost:4001/api/sesion');
            const aux = [];

            data.map((d)=>{
                if(d.id_usuario === usuario._id && d.aceptado)
                    aux.push(d)
            })

            setSesiones(aux)
        }

        const getUsuarios = async()=>{
            const {data} = await axios.get('http://localhost:4001/api/terapeuta');

            setTerapistas(data)
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
        if(terapistas.length === 0) getUsuarios();
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
        terapistas.map((u)=>{
            if(u._id === id_usuario)
                nombre = u.nombre.split(' ')[0];
        })

        return nombre
    }


  return (
    <div className="agenda--container">
      <div id="containerrr">
        
        



        {
          sesiones.map((s)=>{
            return <div className="agenda--item">
                    <div className="agenda--text__left">
                    <p className="day--text">{getDiaSemana(s.id_fecha)}</p>
                            <p className="day--number">{getDia(s.id_fecha)}</p>
                            </div>
                            <div className="agenda--box">
                            
                            <div className="row-1">
                                <div className="row-2">
                                <p>Terapia con {getNombre(s.id_terapeuta)}</p>
                                <div className="agenda--pfp">
                                <img style={{width: 50}} src={pfp} alt="caca" />
                            </div>
                                </div>
                                <p>{getHoras(s.id_fecha)}</p>
                      </div>
                      <Link to={'/agenda/detalles/'+s._id} className="agenda--details__button">Ver detalles</Link>
                    </div>
                  </div>
          })
        }




      </div>
    </div>
  );
}
