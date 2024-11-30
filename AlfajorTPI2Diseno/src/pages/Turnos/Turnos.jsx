import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {useState, useEffect} from 'react';
import TurnosTable from '../../components/Turnos/ListaTurnos'
import CalendarioTurnos from '../../components/Turnos/CalendarioTurnos';

const Turnos = () => {
    return (
       <div class="container-fluid" style={{ backgroundColor: '#fff', height:'100vh'}}>
            <div style={{height:"9%"}}></div>
            <Tabs defaultActiveKey="calendar" id="uncotrolled-tab-example" className="mb-3" >
                <Tab eventKey="calendar" title="Calendario">
                 
                    <div style={{ padding: '20px', height: '100%' }}>
                        <CalendarioTurnos />
                    </div>
          
                </Tab >
                <Tab eventKey="Lista" title="Listado">
                    <TurnosTable />
                </Tab >
            </Tabs>
        </div>
    );
}

export default Turnos;