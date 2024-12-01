import React from "react";
import { useNavigate } from 'react-router-dom';

const Menuabm = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#E6D9B6' }}>
      <img
        style={{
          width: '80%',
          maxWidth: '847px',
          height: 'auto',
          position: 'absolute',
          left: '50%',
          top: '10%',
          transform: 'translateX(-50%)'
        }}
        src="/simbolos y alfajores/alfagear.png"
        alt="Alfagear"
      />

      {/* Barra marrón */}
      <div
        style={{
          width: '80%',
          maxWidth: '850px',
          height: '10vh',
          maxHeight: '120px',
          position: 'absolute',
          left: '50%',
          top: '44%',
          transform: 'translateX(-50%)',
          background: '#41301C',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0 20px'
        }}
      >
        {/* Botón Alta */}
        <button
          style={{
            flex: 1,
            maxWidth: '200px',
            height: '75%',
            padding: '12px',
            background: '#CF7C20',
            borderRadius: '8px',
            border: '1px #2C2C2C solid',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center',
            margin: '0 10px'
          }}
          onClick={() => navigate('/altamenu')}
        >
          <img
            style={{
              width: '10%',
              maxWidth: '32px',
              height: 'auto'
            }}
            src="/simbolos y alfajores/plus.png"
            alt="Alta"
          />
          <div style={{ color: '#F5F5F5', fontSize: '1.5rem', fontFamily: 'Inter', fontWeight: '400' }}>Alta</div>
        </button>

        {/* Botón Modificación */}
        <button
          style={{
            flex: 1,
            maxWidth: '300px',
            height: '75%',
            padding: '12px',
            background: '#CF7C20',
            borderRadius: '8px',
            border: '1px #2C2C2C solid',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center',
            margin: '0 10px'
          }}
          onClick={() => navigate('/modificarmenu')}
        >
          <img
            style={{
              width: '50%',
              maxWidth: '30px',
              height: 'auto'
            }}
            src="/simbolos y alfajores/maslivianoqueunapala.png"
            alt="Modificación y baja"
          />
          <div style={{ color: '#F5F5F5', fontSize: '1.5rem', fontFamily: 'Inter', fontWeight: '400' }}>Modificación-Baja</div>
        </button>
      </div>

      {/* Botón Atras */}
      <button
        style={{
          width: '50%',
          maxWidth: '400px',
          height: '12vh',
          maxHeight: '80px',
          padding: '12px',
          position: 'absolute',
          left: '50%',
          top: '70%',
          transform: 'translate(-50%, -50%)',
          background: '#CF7C20',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px #2C2C2C solid',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          display: 'flex'
        }}
        onClick={() => navigate('/menugerente')}
      >
        <div style={{
          color: '#F5F5F5',
          fontSize: '1.5rem',
          fontFamily: 'Inter',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}>
          Volver al inicio
        </div>
      </button>
    </div>
  );
};

export default Menuabm;