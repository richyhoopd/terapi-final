import React, { useEffect, useState } from "react";
import BackComponent from "../Components/BackComponent";
import pfp from "../Assets/badasspfp-doc.png";
import "../Styles/agendaDetails.css";
import calendario from "../Assets/calendario-circ.png";
import zoom from "../Assets/Vector-zoom.png";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AgendaDetails({ onChange }) {
  const [isCopied, setIsCopied] = useState(false);

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
            const {data} = await axios.get('http://localhost:4001/api/terapeuta/'+sesion.id_terapeuta);

            console.log(data);
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

  const copyToClipboard = () => {
    const copyText = document.querySelector(".copyable-input");
    copyText.select();
    document.execCommand("copy");
    setIsCopied(true);
  };

  const horas = ()=>{
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
          <p className="hora">{horas()}</p>
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
              type="text"
              className="copyable-input"
              value={sesion.link}
              onChange={onChange}
              readonly
            />
            <button onClick={copyToClipboard}>
              {isCopied ? "Link Copiado!" : "Copiar Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
