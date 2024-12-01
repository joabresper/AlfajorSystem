import React from "react";
import { useNavigate } from "react-router-dom";

const BajaConfirmada = () => {

  const navigate = useNavigate();
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#E6D9B6' }}>
      <img style={{ width: 140, height: 114, position: 'absolute', bottom: 0, left: 0 }} src="/simbolos y alfajores/Alfajorchico.png" />
      <img style={{ width: 140, height: 114, position: 'absolute', left: 0, top: 966 }} src="/simbolos y alfajores/Alfajorchico.png" alt="Icono" />

      <div
        onClick={() => navigate('/modificarmenu')}
        style={{
          width: 342,
          height: 106,
          padding: 12,
          position: 'absolute',
          left: 789,
          top: 738,
          background: '#2C2C2C',
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px #2C2C2C solid',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          display: 'flex',
          cursor: 'pointer', // Indicador visual de clickeable
        }}
      >
        <div
          style={{
            color: '#F5F5F5',
            fontSize: 48,
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: '57.60px',
            wordWrap: 'break-word',
          }}
        >
          Aceptar
        </div>
      </div>


      <div style={{ width: 730, height: 174, position: 'absolute', left: 595, top: 469, background: '#009951', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10 }}></div>
      <div style={{ width: 730, height: 152, position: 'absolute', left: 595, top: 491, textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word' }}>El usuario fue dado de baja exitosamente</div>

      <img style={{ width: 278, height: 282, position: 'absolute', left: 821, top: 148 }} src="/simbolos y alfajores/chequeado.png" alt="Confirmación" />
    </div>
  );

};

export default BajaConfirmada;