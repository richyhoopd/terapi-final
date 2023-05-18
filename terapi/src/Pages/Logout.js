import React from 'react'

const Logout = () => {

    localStorage.removeItem('usuario');
    window.location.href = '/'

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Cerrando sesion...</h1>
    </div>
  )
}

export default Logout
