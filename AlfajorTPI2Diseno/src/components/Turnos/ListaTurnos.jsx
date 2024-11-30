import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import turnos from './DatosTurnos'; // Datos de turnos
import './listaTurnos.css';

const TurnosTable = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [filterName, setFilterName] = useState(''); // Filtro de nombre

    // Manejar cambios en el filtro de fecha
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // Manejar cambios en el filtro de nombre
    const handleNameChange = (e) => {
        setFilterName(e.target.value);
    };

    // Filtrar los turnos por nombre y fecha
    const filteredTurnos = turnos.filter(turno => {
        const matchesName = turno.nombreCliente.toLowerCase().includes(filterName.toLowerCase());
        const matchesDate = selectedDate
            ? new Date(turno.fecha.año, turno.fecha.mes - 1, turno.fecha.dia).toDateString() === selectedDate.toDateString()
            : true;
        return matchesName && matchesDate;
    });

    return (
        <div style={{ height: "100%" }}>
            <div className="mb-3">
                <label htmlFor="nameFilter">Filtrar por Nombre:</label>
                <input
                    id="nameFilter"
                    type="text"
                    className="form-control"
                    placeholder="Escriba el nombre del cliente"
                    value={filterName}
                    onChange={handleNameChange}
                    style={{ width: '20%' }}
                />
            </div>
            <div className="table-container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre Cliente</th>
                            <th>DNI</th>
                            <th>Patente</th>
                            <th>Modelo</th>
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
                        {filteredTurnos.map((turno, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{turno.nombreCliente}</td>
                                <td>{turno.dni}</td>
                                <td>{turno.patente}</td>
                                <td>{turno.modelo}</td>
                                <td>{`${turno.fecha.dia}/${turno.fecha.mes}/${turno.fecha.año}`}</td>
                                <td>{turno.hora}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default TurnosTable;