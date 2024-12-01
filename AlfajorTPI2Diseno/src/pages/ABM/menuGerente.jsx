import React from 'react';
import './MenuGerente.css';
import { useNavigate } from 'react-router-dom';
import Logo from "../../../public/logo.png";

const MenuGerente = () => {
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
      <button className="menu-button" onClick={() => navigate('/menuabm')}>
        <span className="menu-text">Usuarios</span>
      </button>

      {/* Botón: Visualizar Turnos */}
      <button 
        className="menu-button"
      >
        <span className="menu-text">Turnos</span>
      </button>

      {/* Botón: Responder Consultas */}
      <button  className="menu-button">
        <span className="menu-text">Vehículos</span>
      </button>

      {/* Botón: Cuenta */}
      <button 
        onClick={() => navigate('/login')}
        className="menu-button">
        <span className="menu-text">Cerrar Sesion</span>
      </button>
    </div>

    {/* Título */}
    <h1 className="title">¡Hola Gerente!</h1>
  </div>
</div>
  );

};

export default MenuGerente;
