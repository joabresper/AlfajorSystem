import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Altamenu = () => {
  const navigate = useNavigate();

  // Estado para manejar datos del formulario
  const [formData, setFormData] = useState({
    contraseña: "",
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
      newErrors.dni = "El DNI debe ser numérico y estar entre 1,000,000 y 99,999,999";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
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
          />
          <FormField
            label="Apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
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
          />
          <FormField
            label="Fecha de nacimiento"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            type="date"
          />
        </div>

        {/* Botón Guardar */}
        <button style={saveButtonStyle} onClick={handleSubmit}>
          Guardar
        </button>
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

export default Altamenu;
