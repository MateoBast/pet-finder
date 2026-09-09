import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "./MisDatosPage.css";

const MisDatosPage = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userEmail = user ? user.email : 'Invitado';

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/'); // Redirige a la página de login
  };
  const handleModifyPasswordClick = () => {
  navigate('/modificar-contrasena');
};

  const handleModifyClick = () => {
    navigate('/modificar-datos'); // Asegúrate de que esta ruta esté configurada en tu router
  };

  return (
    <div className='contenedorDatosPage'>
      <h1 className='tituloDatos'>Mis Datos</h1>
      <div className='contenedorBotonesDatos'>
        <button className='botonUnoHome' onClick={handleModifyClick}>Modificar datos personales</button>
        <button className='botonUnoHome' onClick={handleModifyPasswordClick}>Modificar contraseña</button>
      </div>
      <p className='emailDatos'>{userEmail}</p>
      <button className='botonLogoutDatos' onClick={handleLogoutClick}>CERRAR SESIÓN</button>
    </div>
  );
};

export default MisDatosPage;
