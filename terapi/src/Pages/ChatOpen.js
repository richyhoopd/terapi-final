import React from "react";
import "../Styles/chatOpen.css";
import atras from "../Assets/BackArrowDark.svg";
import pfp from "../Assets/tera.png";
import {Link} from 'react-router-dom'

export default function ChatOpen() {
  return (
    <div className="chat--container">
      <div className="top-chat__back">
        <Link to={'/chat'}><img src={atras} alt="volver" /></Link>
        <img src={pfp} alt="terapeuta" />
        <div className="text--info">
          <p>Alejandro de padua</p>
          <p>Activo Ahora</p>
        </div>
      </div>
      <div className="incomming-message">
        <p>Hola Brayan, ¿Como te has sentido ultimamente?</p>
      </div>
      <div className="outgoing--message">
        <p>Hola, gracias por la pronta 
respuesta, he estado mejorando... 🙏</p>
      </div>
      <div className="message--input">
   
       <input type="text" placeholder="Type your message here..." />
        <button type="submit">Send</button>

      </div>
    </div>
  );
}
