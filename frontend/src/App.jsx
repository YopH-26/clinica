import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Solicitud from './pages/Solicitud';
import Solicitudes from './pages/Solicitudes';
import Doctores from './pages/Doctores';
import Actividad from './pages/Actividad';
import Perfil from './pages/Perfil';
import Nosotros from './pages/Nosotros';
import PerfilClinica from './pages/PerfilClinica';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/solicitud" element={<Solicitud />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/doctores" element={<Doctores />} />
          <Route path="/actividad" element={<Actividad />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfilclinica" element={<PerfilClinica />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
