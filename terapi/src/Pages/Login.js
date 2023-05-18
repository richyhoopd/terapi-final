import React from "react";
import { Link } from "react-router-dom";
import "../Styles/register.css";
import axios from "axios";
import Swal from 'sweetalert2';

export default function Login() {

  const submit = async(e)=>{
    e.preventDefault();
    const email = document.getElementById('Email').value;
    const passwd = document.getElementById('Passwd').value;

    const {data} = await axios.post('http://localhost:4001/api/usuario/iniciar/sesion', {
      correo: email, 
      password: passwd
    });

    if(data._id === undefined){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo y/o contraseña incorrectos',
      })
    }else{
      localStorage.setItem('usuario', JSON.stringify(data));
      window.location.href = '/home';
    }
  }

  return (
    <div className="register--container">
      <div className="container--head">
        <h1>Bienvenido de nuevo a Terapi</h1>
        <h1>Iniciar sesión como estudiante</h1>
        <p> Inicia sesión para seguir con tu terapia o buscar un terapeuta. </p>
      </div>
      <form id="form-login" onSubmit={submit}>
        

        
        <label htmlFor="Email">Email:</label>
        <input
          id="Email"
          className="input--register"
          type="email"
          placeholder="Ingresa un correo electronico..."
          required
        />
        <label htmlFor="Passwd">Contraseña:</label>
        <input
          id="Passwd"
          className="input--register"
          type="password"
          placeholder="Crea una contraseña..."
          required
        />
        <input id="button--submit" className="button--submit" type="submit" value="Iniciar Sesión" />
      </form>
      <p className="bottom--text">¿Aún no tienes una cuenta de terapi? <Link style={{ color: "#0c70e8", }} to={'/register'}>Registrate</Link></p>
      <Link style={{ color: "#0c70e8", }} to={'/login/terapeuta'}>Soy Terapeuta</Link>
    </div>
  );
}  
