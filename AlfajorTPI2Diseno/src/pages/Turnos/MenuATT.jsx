import React from 'react';
import './MenuATT.css';
import { useNavigate } from 'react-router-dom';
import Logo from "../../../public/logo.png";

const MenuATT = () => {
    const navigate = useNavigate();
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E3D9B4' }}>
      
  <div className="container">
    {/* Imagen inferior izquierda */}
    <img className="small-image" src={Logo} alt="Placeholder" />

    

    {/* Fondo del menú */}
    <div className="menu-background"></div>

    {/* Contenedor de los botones */}
    <div className="button-container">
      {/* Botón: Consultar Tarifas */}
      <button className="menu-button">
        <span className="menu-text">Consultar<br />Tarifas</span>
      </button>

      {/* Botón: Visualizar Turnos */}
      <button 
        className="menu-button"
        onClick={() => navigate('/turnos')}
      >
        <span className="menu-text">Turnos</span>
      </button>

      {/* Botón: Responder Consultas */}
      <button className="menu-button">
        <span className="menu-text">Responder<br />Consultas</span>
      </button>

      {/* Botón: Cuenta */}
      <button 
        className="menu-button"
        onClick={() => navigate('/login')}
      >
        <span className="menu-text">Cerrar Sesion</span>
      </button>
    </div>

    {/* Título */}
    <h1 className="title">¡Hola Atención al cliente!</h1>
  </div>
</div>
  );

};

export default MenuATT;
