import React from 'react';

const Altamenu = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#E6D9B6' }}>
      <div
        style={{
          width: '969px',
          height: '941px',
          padding: '24px',
          background: 'white',
          borderRadius: '8px',
          border: '1px solid #D9D9D9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Form Fields */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          <FormField label="Nombre de usuario" />
          <FormField label="Contraseña" />
          <FormField label="DNI" />
          <FormField label="Rol" />
          <FormField label="Nombre" />
          <FormField label="Apellido" />
          <FormField label="Correo electrónico" />
          <FormField label="Teléfono" />
          <FormField label="Dirección" />
        </div>

        {/* Save Button */}
        <button
          style={{
            width: '143px',
            height: '71px',
            padding: '12px',
            background: '#CF7C20',
            borderRadius: '8px',
            border: '1px solid #2C2C2C',
            color: '#F5F5F5',
            fontSize: '16px',
            fontFamily: 'Inter',
            fontWeight: '400',
            cursor: 'pointer',
          }}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

// Reusable FormField Component
const FormField = ({ label }) => {
  return (
    <div
      style={{
        width: '370px',
        height: '88px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <div
        style={{
          color: '#1E1E1E',
          fontSize: '16px',
          fontFamily: 'Inter',
          fontWeight: '400',
          lineHeight: '22.4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          padding: '12px 16px',
          background: 'white',
          borderRadius: '8px',
          border: '1px solid #D9D9D9',
          color: '#B3B3B3',
          fontSize: '16px',
          fontFamily: 'Inter',
          fontWeight: '400',
        }}
      >
        Value
      </div>
    </div>
  );
};

export default Altamenu;