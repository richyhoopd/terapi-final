import React from 'react';
import TopTextComponent from '../Components/TopTextComponent';
import ContactosEmergenciaComponent from '../Components/ContactosEmergenciaComponent';
import Navbar from '../Components/Navbar';
import bgpfp from '../Assets/badasspfp-doc.png'
  import { Link } from 'react-router-dom';

export default function Chat() {
  const title = 'Mensajes';
  const subtitle = 'Envía mensajes a tus amigos cada que lo necesitas';

  return (
    <div>
        <TopTextComponent title={title} subtitle={subtitle}/>

        <ContactosEmergenciaComponent/>
        <Navbar/>
    </div>
  )
}
