import React from 'react';

const Altamenu = () => {
  return (
    <div style={{ width: '1920px', height: '1080px', position: 'relative', background: '#E6D9B6' }}>
      {/* Header */}
      <div
        style={{
          width: '75px',
          height: '60px',
          padding: '8px',
          position: 'absolute',
          top: '6px',
          left: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            background: '#41301C',
            borderRadius: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              padding: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '24px', height: '24px' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          width: '969px',
          height: '941px',
          padding: '24px',
          position: 'absolute',
          top: '94px',
          left: '467px',
          background: 'white',
          borderRadius: '8px',
          border: '1px solid #D9D9D9',
        }}
      >
        {/* Form Fields */}
        <FormField label="Nombre de usuario" top="113px" left="527px" />
        <FormField label="Contraseña" top="120px" left="976px" />
        <FormField label="DNI" top="226px" left="976px" />
        <FormField label="Rol" top="226px" left="527px" />
        <FormField label="Nombre" top="323px" left="526px" />
        <FormField label="Apellido" top="340px" left="976px" />
        <FormField label="Correo electrónico" top="458px" left="526px" />
        <FormField label="Teléfono" top="572px" left="976px" />
        <FormField label="Dirección" top="572px" left="527px" />

        {/* Save Button */}
        <button
          style={{
            width: '143px',
            height: '71px',
            padding: '12px',
            position: 'absolute',
            top: '915px',
            left: '897px',
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
const FormField = ({ label, top, left }) => {
  return (
    <div
      style={{
        width: '370px',
        height: '88px',
        position: 'absolute',
        top: top,
        left: left,
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
