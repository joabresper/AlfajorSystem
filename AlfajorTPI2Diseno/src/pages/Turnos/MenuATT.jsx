import React from 'react';
import './MenuATT.css';
import { useNavigate } from 'react-router-dom';
import Logo from "../../../public/logo.png";

const MenuATT = () => {
    const navigate = useNavigate();
  return (
    <div style={{width:'100vw', height:'100vh', backgroundColor:'#E3D9B4'}}>
        <div className="container" >
          {/* Imagen inferior izquierda */}
          <img className="small-image" src={Logo} alt="Placeholder" />


          {/* Fondo del menú */}
          <div className="menu-background"></div>

          <button 
            className="menu-button" 
            onClick={() => navigate('/turnos')} 
            style={{ left: '555px' }}
          >
            <span className="menu-text">Visualizar Turnos</span>
          </button>

          {/* Botón: Consultar Tarifas */}
          <button 
            className="menu-button"
            style={{ left: '174px' }}
          >
            <span className="menu-text">Consultar<br />Tarifas</span>
          </button>

          {/* Botón: Responder Consultas */}
          <button 
            className="menu-button"
            style={{ left: '936px' }}
          >
            <span className="menu-text">Responder<br />Consultas</span>
          </button>

          {/* Título */}
          <h1 className="title">¡Hola Atencion Al cliente!</h1>
        </div>
    </div>
  );
};

export default MenuATT;
