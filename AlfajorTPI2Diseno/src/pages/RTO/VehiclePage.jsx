import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    { id: 'sinreglamentar', name: 'Sin Reglamentar', icon: '/iconos/sinreglamentar.png', disabled: false },
    { id: 'transporteescolar', name: 'Transporte Escolar', icon: '/iconos/transporteescolar.png', disabled: false },
    { id: 'transportedeanimalesvivos', name: 'Transporte de Animales Vivos y Productos de Origen Vegetal o Animal', icon: '/iconos/transportedeanimalesvivos.png', disabled: false },
];

function VehiclePage() {
    const { patente } = useParams(); // Captura la patente de la URL
    const [disabledItems, setDisabledItems] = useState([
        'vehiculospuladosgnc', 'sistemadeenganchetractormotriz', 'sistemadeenganchevehiculoarrastrado',
        'sistemadearrastredeacoplados', 'transporteescolar', 'transportedeanimalesvivos', 'cargaspeligrosas',
        'unidadesportacontenedores'
    ]);

    const handleClick = (id) => {
        if (disabledItems.includes(id)) {
            return; // No hacer nada si está deshabilitado
        }
        console.log(`Opción seleccionada: ${id}`);
    };

    const isDisabled = (id) => disabledItems.includes(id);
    return (
        <div>
            <h1>Formulario RTO del vehículo con patente: {patente}</h1>
            <div className="menu">
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className={`menu-item ${isDisabled(item.id) ? 'disabled' : ''}`}
                        onClick={() => handleClick(item.id)}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className={`menu-icon ${isDisabled(item.id) ? 'grayscale' : ''}`}
                        />
                        <p className={`menu-name ${isDisabled(item.id) ? 'grayscale-text' : ''}`}>
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VehiclePage;
