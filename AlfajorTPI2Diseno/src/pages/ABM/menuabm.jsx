import React from "react";
import { useNavigate } from 'react-router-dom';

const Menuabm = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#E6D9B6' }}>
      <img style={{ width: 847, height: 843, position: 'absolute', left: '50%', top: '10%', transform: 'translateX(-50%)' }} src="/simbolos y alfajores/alfagear.png" alt="Alfagear" />
      <img style={{ width: 140, height: 114, position: 'absolute', left: 0, bottom: 0 }} src="/simbolos y alfajores/Alfajorchico.png" alt="Alfajorchico" />
      
      {/* Barra marrón */}
      <div style={{ width: 850, height: 120, position: 'absolute', left: '50%', top: '44%', transform: 'translateX(-50%)', background: '#41301C', borderRadius: 8 }}></div>
      
      {/* Sección Alta */}
      <button style={{ width: 147, height: 73, padding: 12, position: 'absolute', left: '30%', top: '50%', transform: 'translateY(-50%)', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', display: 'flex', alignItems: 'center', gap: 8 }}
        onClick={() => navigate('/altamenu')}
      >
        <img style={{ width: 32, height: 32 }} src="/simbolos y alfajores/plus.png" alt="Alta" />
        <div style={{ color: '#F5F5F5', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', lineHeight: '32px' }}>Alta</div>
      </button>
      
      {/* Sección Modificación */}
      <button style={{ width: 253, height: 75, padding: 12, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', display: 'flex', alignItems: 'center', gap: 8 }}
        onClick={() => navigate()}
      >
        <img style={{ width: 32, height: 32 }} src="/simbolos y alfajores/maslivianoqueunapala.png" alt="Modificación" />
        <div style={{ color: '#F5F5F5', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px' }}>Modificación</div>
      </button>
      
      {/* Sección Baja */}
      <button style={{ width: 174, height: 75, padding: 12, position: 'absolute', left: '60%', top: '50%', transform: 'translateY(-50%)', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', display: 'flex', alignItems: 'center', gap: 8 }}
        onClick={() => navigate('/bajamenu')}
      >
        <img style={{ width: 32, height: 32 }} src="/simbolos y alfajores/kkk.png" alt="Baja" />
        <div style={{ color: '#F5F5F5', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', lineHeight: '32px' }}>Baja</div>
      </button>
      
      {/* Botón Atras */}
      <button style={{ width: 350, height: 80, padding: 12, position: 'absolute', left: '50%', top: '70%', transform: 'translate(-50%, -50%)', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}
        onClick={() => navigate('/menugerente')}
      >
        <div style={{ color: '#F5F5F5', fontSize: 48, fontFamily: 'Inter', fontWeight: '400', lineHeight: '57.60px', wordWrap: 'break-word' }}>Volver al inicio</div>
      </button>
    </div>
  );
};

export default Menuabm;