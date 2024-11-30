import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import TurnosTable from '../../components/Turnos/ListaTurnos';
import CalendarioTurnos from '../../components/Turnos/CalendarioTurnos';
import { useNavigate } from 'react-router-dom';
import './Turnos.css';



const Turnos = () => {
    const [hovered, setHovered] = useState(false);

    const navigate = useNavigate();



    return (
        <div className="container-fluid" style={{ backgroundColor: '#E3D9B4', height: '100vh' }}>
            <div style={{ height: "9%" }} className="d-flex p-2">
                <Button
                    style={{
                        width: '7%',
                        backgroundColor: hovered ? '#A85D15' : '#CF7C20', // Color más oscuro al hacer hover
                        border: 'none',
                        color: '#fff',
                        transition: 'background-color 0.3s ease', // Animación suave
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => navigate('/menuatt')}
                >
                    Volver
                </Button>
            </div>
            <Tabs defaultActiveKey="calendar" id="uncotrolled-tab-example" className="mb-3">
                <Tab className='componentSyle' eventKey="calendar" title="Calendario">
                    <div style={{ padding: '20px', height: '100%' }}>
                        <CalendarioTurnos />
                    </div>
                </Tab>
                <Tab className='componentSyle' eventKey="Lista" title="Listado">
                    <TurnosTable />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Turnos;
