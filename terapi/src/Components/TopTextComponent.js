import React from 'react'
import '../Styles/topText.component.css'

export default function TopTextComponent({ title, subtitle }) {
  return (
    <div className='topTextComponent--container'>

    <div id='topTextComponent'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
    </div>
  )
}
