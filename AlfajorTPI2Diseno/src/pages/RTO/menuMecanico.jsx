import React from 'react';
import './menuMecanico.css';
import { useNavigate } from 'react-router-dom';
import Logo from "../../../public/logo.png";

const MenuMecanico = () => {
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
                        <span className="menu-text">Notificar equipo<br /> defectuoso</span>
                    </button>

                    {/* Botón: Visualizar Turnos */}
                    <button
                        className="menu-button"
                        onClick={() => navigate('/Vehiculos')}
                    >
                        <span className="menu-text">Visualizar<br />vehículos</span>
                    </button>

                    <button
                        className="menu-button"
                        onClick={() => navigate('/login')}
                    >
                        <span className="menu-text">Cerrar<br />sesión</span>
                    </button>

                </div>

                {/* Título */}
                <h1 className="title">¡Hola mecánico!</h1>
            </div>
        </div>
    );

};

export default MenuMecanico;
