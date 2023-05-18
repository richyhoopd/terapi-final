import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from './Pages/SplashScreen';
import Choose from './Pages/Choose';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import Agenda from './Pages/Agenda';
import TherapistProfile from './Pages/TherapistProfile';
import ChatOpen from './Pages/ChatOpen';
import AgendaDetails from './Pages/AgendaDetails';
import Perfil from './Pages/Perfil';
import Logout from './Pages/Logout';
import LoginTerapeuta from './Pages/LoginTerapeuta';
import RegisterTerapeuta from './Pages/RegisterTerapeuta';
import HomeTerapeuta from './Pages/HomeTerapeuta';
import SesionesTerapeuta from './Pages/SesionesTerapeuta';
import AceptarSesion from './Pages/AceptarSesion';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      < Route path='/' element={<Login/>} />
      < Route path='/splashscreen' element={<SplashScreen/>} />
      < Route path='/choose' element={<Choose/>} />
      < Route path='/home' element={<Home/>} />
      < Route path='/home/treapeuta' element={<HomeTerapeuta/>} />
      < Route path='/register' element={<Register/>} />
      < Route path='/chat' element={<Chat/>} />
      < Route path='/agenda' element={<Agenda/>} />
      < Route path='/terapeuta/perfil/:id_fecha' element={<TherapistProfile/>} />
      < Route path='/chat/perfil' element={<ChatOpen/>} />
      < Route path='/agenda/detalles/:id' element={<AgendaDetails/>} />
      < Route path='/perfil' element={<Perfil/>} />
      < Route path='/logout' element={<Logout/>} />
      < Route path='/login/terapeuta' element={<LoginTerapeuta/>} />
      < Route path='/register/terapeuta' element={<RegisterTerapeuta/>} />
      < Route path='/sesiones/terapeuta' element={<SesionesTerapeuta/>} />
      < Route path='/aceptar/sesion/:id' element={<AceptarSesion/>} />

      

    </Routes>
   </BrowserRouter>
  );
}

export default App;
