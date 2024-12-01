import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../pages/Turnos/Turnos.css';

const ModalInfo = ({ show, onHide, turno }) => {
    return (
        <Modal show={show} onHide={onHide} centered style={{ backgroundColor: 'transparent' }}>
            <Modal.Header closeButton>
                <Modal.Title>Información del Turno</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {turno ? (
                    <div>
                        <p><strong>Nombre Cliente:</strong> {turno.nombreCliente}</p>
                        <p><strong>DNI:</strong> {turno.dni}</p>
                        <p><strong>Patente:</strong> {turno.patente}</p>
                        <p><strong>Modelo:</strong> {turno.modelo}</p>
                        <p><strong>Fecha:</strong> {`${turno.fecha.dia}/${turno.fecha.mes}/${turno.fecha.año}`}</p>
                        <p><strong>Hora:</strong> {turno.hora}</p>
                    </div>
                ) : (
                    <p>No hay datos disponibles.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button  className="botonModal" variant="secondary" onClick={onHide}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalInfo;
