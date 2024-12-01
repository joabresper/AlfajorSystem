import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import turnos from './DatosTurnos'; // Datos de turnos
import './listaTurnos.css';
import ModalInfo from './Modal';

const TurnosTable = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [filterNameOrDni, setFilterNameOrDni] = useState(''); // Filtro de nombre o DNI
    const [modalShow, setModalShow] = useState(false);
    const [selectedTurno, setSelectedTurno] = useState(null); // Turno seleccionado

    const handleDateChange = (date) => setSelectedDate(date);
    const handleFilterChange = (e) => setFilterNameOrDni(e.target.value);

    const filteredTurnos = turnos.filter(turno => {
        const matchesNameOrDni = turno.nombreCliente.toLowerCase().includes(filterNameOrDni.toLowerCase()) ||
                                 turno.dni.includes(filterNameOrDni);
        const matchesDate = selectedDate
            ? new Date(turno.fecha.año, turno.fecha.mes - 1, turno.fecha.dia).toDateString() === selectedDate.toDateString()
            : true;
        return matchesNameOrDni && matchesDate;
    });

    return (
        <div style={{ height: "100%", padding:'10px'}}>
            <div className="d-flex justify-content-around align-items-center mb-3">
                <div style={{ width: '80%' }}>
                    <label htmlFor="filter">Filtrar por Nombre o DNI:</label>
                    <input
                        id="filter"
                        type="text"
                        className="form-control"
                        placeholder="Nombre cliente o DNI"
                        value={filterNameOrDni}
                        onChange={handleFilterChange}
                        style={{ width: '40%' }}
                    />
                </div>
                <div style={{ width: '100%' }}>
                    <h1>Turnos</h1>
                </div>
            </div>
            <div className="table-container" style={{ width: '70%', margin: '0 auto' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre Cliente</th>
                            <th>DNI</th>
                            <th style={{ width: '10%' }}>
                                <DatePicker
                                    id="dateFilter"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    placeholderText="Fecha"
                                />
                            </th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTurnos.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center">No se han encontrado resultados para su búsqueda</td>
                            </tr>
                        )}
                        {filteredTurnos.map((turno, index) => (
                            <tr 
                                className="cursor-pointer" 
                                onClick={() => {
                                    setSelectedTurno(turno);
                                    setModalShow(true);
                                }} 
                                key={index}
                            >
                                <td>{index + 1}</td>
                                <td>{turno.nombreCliente}</td>
                                <td>{turno.dni}</td>
                                <td>{`${turno.fecha.dia}/${turno.fecha.mes}/${turno.fecha.año}`}</td>
                                <td>{turno.hora}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <ModalInfo
                show={modalShow}
                onHide={() => setModalShow(false)}
                turno={selectedTurno}
            />
        </div>
    );
};

export default TurnosTable;