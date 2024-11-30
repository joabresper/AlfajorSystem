import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VehiclePage.css';

const menuItems = [
    { id: 'sistemadedireccion', name: 'Sistema de Dirección', icon: '/iconos/sistemadedireccion.png', disabled: false },
    { id: 'trendelantero', name: 'Tren Delantero, trasero y suspensión', icon: '/iconos/trendelantero.png', disabled: false },
    { id: 'sistemafrenos', name: 'Sistema de Frenos', icon: '/iconos/sistemafrenos.png', disabled: false },
    { id: 'chasis', name: 'Chasis', icon: '/iconos/chasis.png', disabled: false },
    { id: 'emisiondecontaminantes', name: 'Emisión de Contaminantes', icon: '/iconos/emisiondecontaminantes.png', disabled: false },
    { id: 'neumaticosyllantas', name: 'Neumáticos y Llantas', icon: '/iconos/neumaticosyllantas.png', disabled: false },
    { id: 'sistemaelectrico', name: 'Sistema Eléctrico', icon: '/iconos/sistemaelectrico.png', disabled: false },
    { id: 'instrumentosyaccesorios', name: 'Instrumentos y Accesorios', icon: '/iconos/instrumentosyaccesorios.png', disabled: false },
    { id: 'carroceria', name: 'Carrocería', icon: '/iconos/carroceria.png', disabled: false },
    { id: 'letrerosindicadores', name: 'Letreros e Indicadores', icon: '/iconos/letrerosindicadores.png', disabled: false },
    { id: 'elementosemergencia', name: 'Elementos de Emergencia', icon: '/iconos/elementosemergencia.png', disabled: false },
    { id: 'vehiculospuladosgnc', name: 'Vehículos Propulsados a GNC - Dual', icon: '/iconos/vehiculospuladosgnc.png', disabled: false },
    { id: 'salidasdeemergencia', name: 'Salidas de Emergencia', icon: '/iconos/salidasdeemergencia.png', disabled: false },
    { id: 'vehiculostransportepasajeros', name: 'Vehículos de Transporte de Pasajeros', icon: '/iconos/vehiculostransportepasajeros.png', disabled: false },
    { id: 'documentacion', name: 'Documentación', icon: '/iconos/documentacion.png', disabled: false },
    { id: 'sistemadearrastredeacoplados', name: 'Sistema de Arrastre de Acoplados y Dolly', icon: '/iconos/sistemadearrastredeacoplados.png', disabled: false },
    { id: 'sistemadeenganchetractormotriz', name: 'Sistema de Enganche – Vehículo Tractor o Motriz', icon: '/iconos/sistemadeenganchetractormotriz.png', disabled: false },
    { id: 'sistemadeenganchevehiculoarrastrado', name: 'Sistema de Enganche – Vehículo Arrastrado', icon: '/iconos/sistemadeenganchevehiculoarrastrado.png', disabled: false },
    { id: 'unidadesportacontenedores', name: 'Unidades Porta Contenedores', icon: '/iconos/unidadesportacontenedores.png', disabled: false },
    { id: 'cargaspeligrosas', name: 'Cargas Peligrosas', icon: '/iconos/cargaspeligrosas.png', disabled: false },
    { id: 'transporteescolar', name: 'Transporte Escolar', icon: '/iconos/transporteescolar.png', disabled: false },
    { id: 'transportedeanimalesvivos', name: 'Transporte de Animales Vivos y Productos de Origen Vegetal o Animal', icon: '/iconos/transportedeanimalesvivos.png', disabled: false },
];

function VehiclePage() {
    const { patente } = useParams(); // Captura la patente de la URL
    const navigate = useNavigate(); // Hook para redirigir
    const [disabledItems, setDisabledItems] = useState([
        "vehiculospuladosgnc",
        "sistemadeenganchetractormotriz",
        "sistemadeenganchevehiculoarrastrado",
        "sistemadearrastredeacoplados",
        "transporteescolar",
        "transportedeanimalesvivos",
        "cargaspeligrosas",
        "unidadesportacontenedores",
        "salidasdeemergencia",
        "vehiculostransportepasajeros",
    ]);

    const handleGoBack = () => {
        navigate(-1); // Volvemos atrás en el historial
    };
    
    // Función para convertir nombres a PascalCase sin tildes ni eñes
    const convertToPascalCase = (text) => {
        const normalizeText = text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Elimina tildes
            .replace(/ñ/g, "n") // Convierte eñes a "n"
            .replace(/[^a-zA-Z\s]/g, ""); // Elimina caracteres especiales

        return normalizeText
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join("");
    };

    const handleClick = (id) => {
        if (disabledItems.includes(id)) {
            return; // No hacer nada si está deshabilitado
        }
        const selectedItem = menuItems.find((item) => item.id === id);
        if (selectedItem) {
            const pascalCaseName = convertToPascalCase(selectedItem.name);
            navigate(`./${pascalCaseName}`); // Navegar a la página con PascalCase
        }
    };

    const isDisabled = (id) => disabledItems.includes(id);

    return (
        <div>
            <header style={{ padding: "20px", background: "#f0f0f0", textAlign: "center" }}>
                <h1>Formulario RTO del vehículo con patente: {patente}</h1>
            </header>
            <div className="menu">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`menu-item ${isDisabled(item.id) ? "disabled" : ""}`}
                        onClick={() => handleClick(item.id)}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className={`menu-icon ${isDisabled(item.id) ? "grayscale" : ""}`}
                        />
                        <p className={`menu-name ${isDisabled(item.id) ? "grayscale-text" : ""}`}>
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
            <div style={styles.container}>
                <button style={styles.button} onClick={handleGoBack}>
                    Volver
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
};

export default VehiclePage;