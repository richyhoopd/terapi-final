import React, { useEffect } from 'react';
import usrIcon from '../Assets/userIcon.svg';
import { Link } from 'react-router-dom';
import '../Styles/contactos-emergencia.component.css'
import Swal from 'sweetalert2';
import axios from 'axios';

export default function ContactosEmergenciaComponent() {

  const usuario = JSON.parse(localStorage.getItem('usuario'));

  useEffect(()=>{
    console.log(usuario);
  })

  const agregarContacto1 = async()=>{

    var data;

    Swal.fire({
      title: 'Ingresa el nombre del contacto',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      showLoaderOnConfirm: true,
      preConfirm: (nombre) => {
        Swal.fire({
          title: 'Ingresa el telefono de '+nombre,
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Continuar',
          showLoaderOnConfirm: true,
          preConfirm: async(telefono) => {
            await axios.put('http://localhost:4001/api/usuario/agregar/contacto/1/'+usuario._id,{
              nombre: nombre, 
              telefono: telefono
            })

            data = await axios.get('http://localhost:4001/api/usuario/'+usuario._id);
            console.log(data);
          }
        }).then(()=>{
          localStorage.setItem('usuario', JSON.stringify(data.data));
          window.location.reload()
        })
      }
    })
  }

  const agregarContacto2 = async()=>{

    var data;

    Swal.fire({
      title: 'Ingresa el nombre del contacto',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      showLoaderOnConfirm: true,
      preConfirm: (nombre) => {
        Swal.fire({
          title: 'Ingresa el telefono de '+nombre,
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Continuar',
          showLoaderOnConfirm: true,
          preConfirm: async(telefono) => {
            await axios.put('http://localhost:4001/api/usuario/agregar/contacto/2/'+usuario._id,{
              nombre: nombre, 
              telefono: telefono
            })

            data = await axios.get('http://localhost:4001/api/usuario/'+usuario._id)
          }
        }).then(()=>{
          localStorage.setItem('usuario', JSON.stringify(data.data));
          window.location.reload()
        })
      }
    })
  }

  const mostrarContacto1 = ()=>{
    if(usuario.contacto1 !== undefined && usuario.contacto1 !== null)
      return <div className='card--contacto__emergencia'>
                  <img src={usrIcon} alt='contacto emergencia'/>
                  <p>{usuario.contacto1}</p>
                  <a target='_blank' className='pedir--ayuda__button' href={'https://wa.me/'+usuario.tel_contacto1}>Hablar Ahora</a>
                  <br/>
                  <Link className='pedir--ayuda__button' onClick={agregarContacto1}>Editar Contacto</Link>
              </div>
    else
      return <Link className='pedir--ayuda__button' onClick={agregarContacto1}>Agregar Contacto</Link>
  }

  const mostrarContacto2 = ()=>{
    if(usuario.contacto2 !== undefined && usuario.contacto2 !== null)
      return <div className='card--contacto__emergencia'>
                  <img src={usrIcon} alt='contacto emergencia'/>
                  <p>{usuario.contacto2}</p>
                  <a target='_blank' className='pedir--ayuda__button' href={'https://wa.me/'+usuario.tel_contacto2}>Hablar Ahora</a>
                  <br/>
                  <Link className='pedir--ayuda__button' onClick={agregarContacto2}>Editar Contacto</Link>
              </div>
    else
      return <Link className='pedir--ayuda__button' onClick={agregarContacto2}>Agregar Contacto</Link>
  }

  return (
    <div className='contactos--emergencia__container'>
        <h2>Contactos de emergencia</h2>
      <div id='containerr'>

        {mostrarContacto1()}
        {mostrarContacto2()}
        
        
      </div>
    </div>
  )
}
