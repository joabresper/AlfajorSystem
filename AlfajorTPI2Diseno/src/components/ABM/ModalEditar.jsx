import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalEditar = ({ show, onHide, usuario, onSave }) => {
    const [formData, setFormData] = useState(usuario || {});

    // Sincroniza formData con el prop usuario cuando este cambia
    useEffect(() => {
        if (usuario) {
            setFormData(usuario);
        }
    }, [usuario]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = () => {
        onSave(formData);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} style={{ backgroundColor: 'transparent' }}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={formData.nombre || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellido"
                            value={formData.apellido || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formDni">
                        <Form.Label>DNI</Form.Label>
                        <Form.Control
                            type="text"
                            name="dni"
                            value={formData.dni || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCorreo">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            name="correo"
                            value={formData.correo || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            name="telefono"
                            value={formData.telefono || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formRol">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control
                            as="select"
                            name="rol"
                            value={formData.rol || ''}
                            onChange={handleChange}
                        >
                            <option value="Mecánico">Mecánico</option>
                            <option value="Atención al cliente">Atención al cliente</option>
                            <option value="Director técnico">Director técnico</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formFechaNac">
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control
                            type="text"
                            name="fecha_nac"
                            value={formData.fecha_nac || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditar;
