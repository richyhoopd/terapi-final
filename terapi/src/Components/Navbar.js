import React from 'react';
import agenda from '../Assets/agenda-icon.svg';
import chat from '../Assets/chat-icon.svg';
import homeIco from '../Assets/home-icon.svg';
import usr from '../Assets/user-alt.svg'
import { Link } from 'react-router-dom';

import '../Styles/navbar.component.css';

export default function Navbar() {
  return (
    <div className='parenttt'>
        <div className='navbar--container'>
        <Link id='homeIcon' className='icon--active' to={'/home'}><img src={homeIco} alt='inicio'></img></Link>
        <Link id='chatIcon' className='icon--off' to={'/chat'}><img src={chat} alt='chat'></img></Link>
        <Link id='agendaIcon' className='icon--off'  to={'/agenda'}><img src={agenda} alt='agenda'></img></Link>
        <Link id='usrIcon' className='icon--off'  to={'/perfil'}><img src={usr} alt='agenda'></img></Link>

    </div>
    </div>
  )
}
