import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ModalEditar from '../../components/ABM/ModalEditar'; // Asegúrate de importar el componente ModalEditar
import "./modificarmenu.css";

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
        <div className="table-container" >
            {/* Botón Volver */}
            <button className="back-button" onClick={handleBack}>
                Volver
            </button>

            {/* Alerta de confirmación */}
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Usuario actualizado correctamente.
                </Alert>
            )}

            {/* Contenedor de la tabla */}
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuariosList.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.rol}</td>
                                <td>
                                    <Button style={{ margin: '10px' }} className="edit-button" onClick={() => handleEdit(usuario)}>Editar</Button>
                                    <Button style={{ margin: '10px' }} className="delete-button" onClick={() => navigate('/bajaconfirm')}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


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

export default ModificarMenu;