import React from "react";
import PropTypes from "prop-types";
import "./modificarmenu.css";
import { useNavigate } from "react-router-dom";

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

    // Método para manejar clic en una fila
    const handleRowClick = (usuario) => {
      navigate(`/usuario/${usuario.id}`, { state: usuario });
    };
  
    // Método para manejar clic en el botón volver
    const handleBack = () => {
      navigate(-1); // Navega hacia atrás
    };
  
    return (
      <div className="table-container">
        {/* Botón Volver */}
        <button className="back-button" onClick={handleBack}>
          Volver
        </button>
  
        {/* Tabla de usuarios */}
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
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.rol}</td>
                <td>
                  <button className="edit-button">Editar</button>
                  <button className="delete-button">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ModificarMenu;
