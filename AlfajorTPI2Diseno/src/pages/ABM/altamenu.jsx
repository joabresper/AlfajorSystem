import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Altamenu = () => {
  const navigate = useNavigate();

  // Estado para manejar datos del formulario
  const [formData, setFormData] = useState({
    dni: "",
    rol: "Mecánico", // Valor por defecto
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccion: "",
    fecha: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad del modal

  // Validar correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validar teléfono
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // 10 dígitos
    return phoneRegex.test(phone);
  };

  // Validar DNI
  const validateDni = (dni) => {
    return !isNaN(dni) && dni >= 1000000 && dni <= 99999999;
  };

  // Validar nombre (solo letras, cualquier largo)
  const validateName = (name) => {
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/; // Permite letras, acentos, ñ y espacios
    return nameRegex.test(name);
  };

  // Validar apellido (igual que nombre)
  const validateLastName = (lastName) => {
    const lastNameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/; // Permite letras, acentos, ñ y espacios
    return lastNameRegex.test(lastName);
  };

  // Validar que un campo no esté vacío
  const validateNotEmpty = (value) => {
    return value.trim() !== ''; // Elimina espacios y verifica que no esté vacío
  };


  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar validaciones y guardar datos
  const handleSubmit = () => {
    const newErrors = {};

    if (!validateEmail(formData.correo)) {
      newErrors.correo = "Correo no válido";
    }
    if (!validatePhone(formData.telefono)) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos";
    }
    if (!validateDni(formData.dni)) {
      newErrors.dni = "El DNI ingresado no es válido";
    }
    if (!validateName(formData.nombre)) {
      newErrors.nombre = "El nombre debe contener solo letras y espacios";
    }
    if (!validateLastName(formData.apellido)) {
      newErrors.apellido = "El apellido debe contener solo letras y espacios";
    }
    if (!validateNotEmpty(formData.direccion)) {
      newErrors.direccion = "La direccion no puede estar vacía";
    }
    if (!validateNotEmpty(formData.fecha)) {
      newErrors.fecha = "Seleccionar una fecha";
    }

    setErrors(newErrors);
    console.log(newErrors)

    if (Object.keys(newErrors).length == 0) {
      setIsModalOpen(true); // Muestra el modal
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(-1); // Redirige después de cerrar el modal
  };

  return (
    <div style={containerStyle}>
      {/* Botón para volver */}
      <img
        src="/simbolos y alfajores/ultraizquierda.png"
        alt="Flecha izquierda"
        style={backButtonStyle}
        onClick={() => navigate("/menuabm")}
      />

      {/* Contenedor principal */}
      <div style={formContainerStyle}>
        <div style={formFieldsContainerStyle}>
          <FormField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            error={errors.nombre}
          />
          <FormField
            label="Apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            error={errors.apellido}
          />
          <FormField
            label="DNI"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            error={errors.dni}
          />
          <FormFieldSelect
            label="Rol"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            options={["Mecánico", "Atención al cliente", "Director técnico"]}
          />
          <FormField
            label="Correo electrónico"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            error={errors.correo}
          />
          <FormField
            label="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            error={errors.telefono}
          />
          <FormField
            label="Dirección"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            error={errors.direccion}
          />
          <FormField
            label="Fecha de nacimiento"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            type="date"
            error={errors.fecha}
          />
        </div>

        {/* Botón Guardar */}
        <div style={styles.container}>
          <button style={saveButtonStyle} onClick={handleSubmit}>
            Guardar
          </button>
          {/* Botón para volver */}
          <button style={saveButtonStyle} onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
      </div>
      
      {/* Modal Personalizado */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              padding: "20px",
              background: "white",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h2>Usuario creado correctamente</h2>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#CF7C20",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={closeModal}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


// Estilos
const containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#E6D9B6",
  position: "relative",
};

const backButtonStyle = {
  width: "50px",
  height: "50px",
  position: "absolute",
  top: "10px",
  left: "10px",
  cursor: "pointer",
};

const formContainerStyle = {
  width: "969px",
  padding: "24px",
  background: "white",
  borderRadius: "8px",
  border: "1px solid #D9D9D9",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
};

const formFieldsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
  justifyContent: "center",
};

const saveButtonStyle = {
  width: "143px",
  height: "71px",
  padding: "12px",
  background: "#CF7C20",
  borderRadius: "8px",
  border: "1px solid #2C2C2C",
  color: "#F5F5F5",
  fontSize: "16px",
  fontFamily: "Inter",
  fontWeight: "400",
  cursor: "pointer",
};

// Componente reutilizable para campos de texto
const FormField = ({ label, name, value, onChange, type = "text", error }) => (
  <div style={{ width: "370px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <label style={{ color: "#1E1E1E", fontSize: "16px" }}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={{
        padding: "12px 16px",
        background: "white",
        borderRadius: "8px",
        border: "1px solid #D9D9D9",
        color: "#1E1E1E",
        fontSize: "16px",
      }}
    />
    {error && <span style={{ color: "red", fontSize: "12px" }}>{error}</span>}
  </div>
);

// Componente reutilizable para campo select
const FormFieldSelect = ({ label, name, value, onChange, options }) => (
  <div style={{ width: "370px", display: "flex", flexDirection: "column", gap: "8px" }}>
    <label style={{ color: "#1E1E1E", fontSize: "16px" }}>{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      style={{
        padding: "12px 16px",
        background: "white",
        borderRadius: "8px",
        border: "1px solid #D9D9D9",
        color: "#1E1E1E",
        fontSize: "16px",
      }}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Distribuye los botones con espacio entre ellos
    gap: '20px', // Espacio entre los botones
    padding: '20px', // Espaciado interno
  },
}
export default Altamenu;
