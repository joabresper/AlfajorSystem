import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import turnos from './DatosTurnos';

const TurnosTable = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const filteredTurnos = selectedDate
        ? turnos.filter(turno => {
            // Convertir fecha de turno a objeto Date
            const turnoDate = new Date(turno.fecha.año, turno.fecha.mes - 1, turno.fecha.dia);
            return turnoDate.toDateString() === selectedDate.toDateString();
        })
        : turnos;

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="dateFilter">Filtrar por fecha:</label>
                
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre Cliente</th>
                        <th>DNI</th>
                        <th>Patente</th>
                        <th>Modelo</th>
                        <th style={{width:'10%'}}><DatePicker
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
