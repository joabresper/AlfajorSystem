import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

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
        <Modal show={show} onHide={onHide}>
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

const usuarios = [
    { id: 1, nombre: "Ana García", apellido: "Gómez", dni: "87654321", correo: "anagarcia@correo.com", telefono: "987654321", rol: "Atención al Cliente", fecha_nac: "15/03/1985" },
    { id: 2, nombre: "Carlos López", apellido: "Ramírez", dni: "45678912", correo: "carloslopez@correo.com", telefono: "234567890", rol: "Mecánico", fecha_nac: "20/07/1992" },
    { id: 3, nombre: "Lucía Martínez", apellido: "Hernández", dni: "34567891", correo: "luciamartinez@correo.com", telefono: "345678901", rol: "Atención al Cliente", fecha_nac: "12/11/1995" },
    { id: 4, nombre: "José Torres", apellido: "Fernández", dni: "56789123", correo: "josetorres@correo.com", telefono: "456789012", rol: "Mecánico", fecha_nac: "05/05/1980" },
    { id: 5, nombre: "María Rodríguez", apellido: "Díaz", dni: "23456789", correo: "mariarodriguez@correo.com", telefono: "567890123", rol: "Mecánico", fecha_nac: "08/08/1988" },
    { id: 6, nombre: "Pedro Sánchez", apellido: "Morales", dni: "78912345", correo: "pedrosanchez@correo.com", telefono: "678901234", rol: "Mecánico", fecha_nac: "25/12/1983" },
    { id: 7, nombre: "Elena Ruiz", apellido: "Castro", dni: "90123456", correo: "elenaruiz@correo.com", telefono: "789012345", rol: "Mecánico", fecha_nac: "17/09/1991" },
    { id: 8, nombre: "Luis Gómez", apellido: "Ortiz", dni: "12378945", correo: "luisgomez@correo.com", telefono: "890123456", rol: "Mecánico", fecha_nac: "02/04/1987" },
    { id: 9, nombre: "Sofía Pérez", apellido: "Jiménez", dni: "34512978", correo: "sofiaperez@correo.com", telefono: "901234567", rol: "Director técnico", fecha_nac: "30/06/1993" },
    { id: 10, nombre: "Miguel Romero", apellido: "López", dni: "78123459", correo: "miguelromero@correo.com", telefono: "012345678", rol: "Director técnico", fecha_nac: "18/01/1989" },
];

const ModificarMenu = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedUsuario, setSelectedUsuario] = useState(null);
    const [usuariosList, setUsuariosList] = useState(usuarios);
    const [showAlert, setShowAlert] = useState(false);

    // Método para manejar clic en el botón volver
    const handleBack = () => {
        navigate('/menuabm'); // Navega hacia atrás
    };

    // Método para manejar clic en el botón editar
    const handleEdit = (usuario) => {
        setSelectedUsuario(usuario);
        setShowModal(true);
    };

    // Método para guardar los cambios del usuario editado
    const handleSave = (updatedUsuario) => {
        setUsuariosList(usuariosList.map(usuario =>
            usuario.id === updatedUsuario.id ? updatedUsuario : usuario
        ));
        setShowModal(false);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Ocultar alerta después de 3 segundos
    };

    return (
        <div style={styles.tableContainer}>
            {/* Botón Volver */}
            <button
                className="back-button"
                onClick={handleBack}
                style={styles.backButton}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                Volver
            </button>

            {/* Alerta de confirmación */}
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible style={styles.alert}>
                    Usuario actualizado correctamente.
                </Alert>
            )}

            {/* Tabla de usuarios */}
            <table style={styles.userTable}>
                <thead>
                    <tr style={styles.userTableHeader}>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosList.map((usuario) => (
                        <tr key={usuario.id} className="userTableRow" style={styles.userTableRowHover}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.rol}</td>
                            <td>
                                <Button
                                    style={styles.editButton}
                                    onClick={() => handleEdit(usuario)}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    style={styles.editButton}
                                    onClick={() => navigate('/bajaconfirm')}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para editar usuario */}
            {selectedUsuario && (
                <ModalEditar
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    usuario={selectedUsuario}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

const styles = {
    /* Contenedor principal */
    tableContainer: {
        width: '97%',
        height: 'auto',
        padding: '20px 20px',
        backgroundColor: '#f9f9f9',
        position: 'relative',
        boxSizing: 'border-box',
        margin: '20px',
    },

    /* Botón Volver */
    backButton: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#cf7c20',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },

    backButtonHover: {
        backgroundColor: '#b25e1a',
    },

    /* Tabla de usuarios */
    userTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '50px',
        textAlign: 'left',
        backgroundColor: 'white',
        border: '1px solid #ddd',
    },

    userTableCell: {
        padding: '12px 20px',  // Agregamos más padding a las celdas (derecha e izquierda)
        border: '1px solid #ddd',
        fontSize: '1.1rem',  // Aumentamos el tamaño de la fuente
    },

    userTableHeader: {
        backgroundColor: '#41301c',
        color: 'white',
        fontSize: '1.2rem',  // Aumentamos el tamaño de la fuente del encabezado
        padding: '15px 20px',  // Padding más grande para el encabezado
    },

    userTableRowHover: {
        backgroundColor: '#f2f2f2',
        cursor: 'pointer',
    },

    /* Modal */
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },

    /* Botón de edición y eliminar */
    editButton: {
        backgroundColor: '#cf7c20',
        border: '0',
        fontSize: '1.1rem',  // Aumentamos el tamaño de la fuente de los botones
        padding: '8px 15px',  // Ajustamos el padding para que se vean más grandes
        marginRight: '10px',  // Añadimos un margen entre los botones
    },

    editButtonHover: {
        backgroundColor: '#b25e1a',
    },

    deleteButton: {
        backgroundColor: '#dc3545',  // Color para el botón eliminar
        border: '0',
        fontSize: '1.1rem',  // Aumentamos el tamaño de la fuente de los botones
        padding: '8px 15px',  // Ajustamos el padding para que se vean más grandes
    },

    deleteButtonHover: {
        backgroundColor: '#b02a37',  // Color para el hover de eliminar
    },
};




export default ModificarMenu;