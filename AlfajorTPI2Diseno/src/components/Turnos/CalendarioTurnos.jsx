import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importar Modal y Button de React Bootstrap
import turnos from './DatosTurnos'; // Datos de turnos
import './CalendarioTurnos.css';

const CalendarioTurnos = () => {
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
    const [selectedDay, setSelectedDay] = useState(null); // Día seleccionado para el modal
    const [turnosDelDia, setTurnosDelDia] = useState([]); // Turnos del día seleccionado
  
    // Generar los días del mes actual
    const generateCalendarDays = (month, year) => {
      const daysInMonth = new Date(year, month, 0).getDate(); // Obtener la cantidad de días del mes
      const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // Día de la semana del primer día del mes
  
      // Crear una matriz de días para mostrar el calendario
      const daysArray = [];
  
      // Llenar con días vacíos hasta el primer día del mes
      for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push(null);
      }
  
      // Llenar con los días reales del mes
      for (let day = 1; day <= daysInMonth; day++) {
        daysArray.push(day);
      }
  
      return daysArray;
    };
  
    useEffect(() => {
      const daysArray = generateCalendarDays(currentMonth.getMonth() + 1, currentMonth.getFullYear());
      setDaysInMonth(daysArray);
    }, [currentMonth]);
  
    // Filtrar turnos por día
    const getTurnosForDay = (day) => {
      return turnos.filter((turno) => {
        return (
          turno.fecha.dia === day &&
          turno.fecha.mes === currentMonth.getMonth() + 1 &&
          turno.fecha.año === currentMonth.getFullYear()
        );
      });
    };
  
    // Función para manejar clic en un día con turnos
    const handleDayClick = (day) => {
      const turnosDelDia = getTurnosForDay(day);
      if (turnosDelDia.length > 0) {
        setSelectedDay(day);
        setTurnosDelDia(turnosDelDia);
        setShowModal(true);
      }
    };
  
    // Funciones para cambiar el mes y el año
    const handlePrevMonth = () => {
      const newDate = new Date(currentMonth);
      newDate.setMonth(currentMonth.getMonth() - 1);
      setCurrentMonth(newDate);
    };
  
    const handleNextMonth = () => {
      const newDate = new Date(currentMonth);
      newDate.setMonth(currentMonth.getMonth() + 1);
      setCurrentMonth(newDate);
    };
  
    const handlePrevYear = () => {
      const newDate = new Date(currentMonth);
      newDate.setFullYear(currentMonth.getFullYear() - 1);
      setCurrentMonth(newDate);
    };
  
    const handleNextYear = () => {
      const newDate = new Date(currentMonth);
      newDate.setFullYear(currentMonth.getFullYear() + 1);
      setCurrentMonth(newDate);
    };
  
    return (
      <div style={{ padding: '20px', paddingTop:'0' }}>
        <div className="calendar-header">
        <div className="calendar-nav">
            <button className='botonColor' onClick={handlePrevMonth}>{"<"}</button>
            <span>{currentMonth.toLocaleString('default', { month: 'long' })}</span>
            <button onClick={handleNextMonth}>{">"}</button>
        </div>
        <div>
          <h1>Turnos</h1>
        </div>
        <div className="calendar-nav">
            <button onClick={handlePrevYear}>{"<"}</button>
            <span>{currentMonth.getFullYear()}</span>
            <button onClick={handleNextYear}>{">"}</button>
        </div>
        </div>
  
        {/* Mostrar días de la semana */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>Dom</div>
          <div>Lun</div>
          <div>Mar</div>
          <div>Mié</div>
          <div>Jue</div>
          <div>Vie</div>
          <div>Sáb</div>
        </div>
  
        {/* Mostrar días del mes con turnos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
          {daysInMonth.map((day, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                backgroundColor: '#fff',
                position: 'relative',
                minHeight: '100px',
                cursor: day ? 'pointer' : 'default', // Hacer clic en los días
              }}
              onClick={() => handleDayClick(day)} // Manejar clic en el día
            >
              {day && (
                <>
                  <div style={{ fontWeight: 'bold' }}>{day}</div>
                  {/* Mostrar "Turnos asignados" si hay turnos */}
                  {getTurnosForDay(day).length > 0 && (
                    <div style={{ color: 'green', fontSize: '12px', fontStyle: 'italic' }}>Turnos asignados</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
  
        {/* Modal para mostrar los turnos del día seleccionado */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size='lg' style={{ backgroundColor: 'transparent' }}>
          <Modal.Header closeButton>
            <Modal.Title>Turnos para el día {selectedDay}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {turnosDelDia.map((turno, index) => (
                <li key={index} className='mb-4'>
                  Modelo: <strong>{turno.modelo}</strong>  - Patente: <strong>{turno.patente}</strong> - Hora: <strong>{turno.hora}</strong>
                  <br />
                  <small>Cliente: {turno.nombreCliente} | DNI: {turno.dni}</small>
                  <br />
                </li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    );
  };
  

export default CalendarioTurnos;
