import React from "react";
import { Link } from "react-router-dom";
import "../Styles/choose.css";
import terapeuta from "../Assets/juicy-terapeuta.png";
import estudiante from "../Assets/juicy-paciente.png";

export default function Choose() {
  return (
    <div className="choose--container">
      <h1 className="section--title">Selecciona una Opcion</h1>
      <Link className="estudiante" to={"/home"}>
        <div className="choose--img">

        <img  src={estudiante} alt="terapeuta" />
        </div>
        <p className="texto">Soy Estudiante</p>
      </Link>
      <Link className="terapeuta" to={"/home"}>
        <div className="choose--img">

        <img className="choose--img" src={terapeuta} alt="terapeuta" />
        </div>
        <p className="terapeuta--texto">Soy Terapeuta</p>
      </Link>
    </div>
  );
}
