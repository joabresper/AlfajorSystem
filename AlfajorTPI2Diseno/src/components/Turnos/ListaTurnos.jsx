import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import turnos from './DatosTurnos'; // Datos de turnos

const TurnosTable = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [filterName, setFilterName] = useState(''); // Estado para el filtro por nombre

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
        const matchesName = turno.nombreCliente.toLowerCase().includes(filterName.toLowerCase()); // Filtrado por nombre
        const matchesDate = selectedDate
            ? new Date(turno.fecha.año, turno.fecha.mes - 1, turno.fecha.dia).toDateString() === selectedDate.toDateString()
            : true; // Si no hay fecha seleccionada, no se filtra por fecha
        return matchesName && matchesDate; // Cumple ambos filtros
    });

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="nameFilter">Filtrar por Nombre:</label>
                <input
                    style={{ width: '20%' }}
                    id="nameFilter"
                    type="text"
                    className="form-control"
                    placeholder="Escriba el nombre del cliente"
                    value={filterName}
                    onChange={handleNameChange} // Actualizar el estado del filtro de nombre
                />
            </div>
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
    );
};

export default TurnosTable;
