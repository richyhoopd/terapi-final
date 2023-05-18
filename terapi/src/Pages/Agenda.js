import React from 'react'
import TopTextComponent from '../Components/TopTextComponent'
import AgendaItemComponent from '../Components/AgendaItemComponent'
import Navbar from '../Components/Navbar'

export default function Agenda() {
  const title = 'Agenda';
  const subtitle = 'Los links e info de tus citas con el terapeuta aparecen en esta pagina. ';

  return (
    <div>
        <TopTextComponent title={title} subtitle={subtitle} />
        <AgendaItemComponent/>
        <Navbar/>
    </div>
  )
}
