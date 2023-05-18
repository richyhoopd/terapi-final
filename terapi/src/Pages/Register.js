import React from "react";
import "../Styles/register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  
  const submit = async(e)=>{
    e.preventDefault();

    const nombre = document.getElementById('Name').value;
    const correo = document.getElementById('Email').value;
    const telefono = document.getElementById('Numero').value;
    const passwrd = document.getElementById('Passwd').value;

    const {data} = await axios.post('http://localhost:4001/api/usuario/',
    {
      nombre: nombre,
      correo: correo, 
      telefono: telefono,
      password: passwrd
    })

    if(data._id !== undefined){
      window.location.href = '/';
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo ya registrado con una cuenta, inetente nuevamente',
      })
    }

  }
  
  return (
    <div className="register--container">
      <div className="container--head">
        <h1>Crear una cuenta</h1>
        <p> Crearemos un perfil para guardar tus preferencias </p>
      </div>
      <form onSubmit={submit}>
        <label for="Name">Nombre:</label>

        <input
          id="Name"
          className="input--register"
          type="text"
          placeholder="ingresa tu nombre completo..."
          required
        />
        <label for="Email">Email:</label>
        <input
          id="Email"
          className="input--register"
          type="email"
          placeholder="Ingresa un correo electronico..." 
          required
        />
        <label for="Numero">Numero de Telefono:</label>
        <input
          id="Numero"
          className="input--register"
          type="number"
          placeholder="Ingresa tu numero de telefono..."
          required
        />
        <label for="Passwd">Contraseña:</label>
        <input
          id="Passwd"
          className="input--register"
          type="password"
          placeholder="Crea una contraseña..."
          required
        />
        <input id="button--submit" className="button--submit" type="submit" value="Registrarse" />
      </form>
      <p className="bottom--text">¿Ya tienes una cuenta de terapi? <Link className="bottom--link" style={{ color: "#0c70e8", }} to={'/'}>inicia Sesión</Link></p>
    </div>
  );
}
