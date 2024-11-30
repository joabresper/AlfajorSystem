import React from 'react';

const AltaConfirmada = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#E6D9B6' }}>
      <img style={{ width: 140, height: 114, position: 'absolute', left: 0, top: 'calc(100% - 114px)' }} src="/simbolos y alfajores/Alfajorchico.png" alt="Alfajorchico" />
      
      <img style={{ width: 292, height: 285, position: 'absolute', left: '50%', top: '5%', transform: 'translateX(-50%)' }} src="/simbolos y alfajores/chequeado.png" alt="Confirmación" />
      
      <div style={{ width: 721, height: 162, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: '#009951', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10 }}></div>
      <div style={{ width: 720, height: 116, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word' }}>El usuario fue dado de alta correctamente</div>
      
      <div style={{ width: 360, height: 107, padding: 12, position: 'absolute', left: '50%', top: '65%', transform: 'translateX(-50%)', background: '#2C2C2C', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
        <div style={{ color: '#F5F5F5', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word' }}>Aceptar</div>
      </div>
    </div>
  );
};

export default AltaConfirmada;