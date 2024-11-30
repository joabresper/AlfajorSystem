import React from "react";

const Menuabm = () => {
  return (
    <div style={{ width: 1920, height: 1080, position: 'relative', background: '#E6D9B6' }}>
      <img style={{ width: 847, height: 843, left: 537, top: 118, position: 'absolute' }} src="/simbolos y alfajores/alfagear.png" />
      <img style={{ width: 140, height: 114, left: 0, top: 966, position: 'absolute' }} src="/simbolos y alfajores/Alfajorchico.png" />
      <div style={{ width: 29, height: 24, left: 498, top: 206, position: 'absolute' }} />
      <div style={{ width: 974, height: 152, left: 473, top: 464, position: 'absolute', background: '#41301C', borderRadius: 8 }}></div>
      <div style={{ width: 458, height: 152, left: 731, top: 721, position: 'absolute', background: '#41301C', borderRadius: 8 }}></div>
      
      {/* Sección Alta */}
      <div style={{ width: 147, height: 73, padding: 12, left: 557, top: 503, position: 'absolute', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', display: 'flex', alignItems: 'center', gap: 8 }}>
        <img style={{ width: 32, height: 32 }} src="/simbolos y alfajores/plus.png" alt="Alta" />
        <div style={{ color: '#F5F5F5', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', lineHeight: 32 }}>Alta</div>
      </div>
      
      {/* Sección Modificación */}
      <div style={{ width: 253.24, height: 74.96, left: 834.13, top: 503.29, position: 'absolute' }}>
        <div style={{ width: 253.24, height: 74.96, padding: 12, left: 0, top: 0, position: 'absolute', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img style={{ width: 32, height: 32 }} src="/simbolos y alfajores/maslivianoqueunapala.png" alt="Modificación" />
          <div style={{ color: '#F5F5F5', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24 }}>Modificación</div>
        </div>
      </div>
      
      {/* Sección Baja */}
      <div style={{ width: 174, height: 75, padding: 12, left: 1218, top: 503, position: 'absolute', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', display: 'flex', alignItems: 'center', gap: 8 }}>
        <img style={{ width: 32, height: 32 }} src="/simbolos y alfajores/kkk.png" alt="Baja" />
        <div style={{ color: '#F5F5F5', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', lineHeight: 32 }}>Baja</div>
      </div>
      
      <div style={{ width: 72, height: 61, left: 1305, top: 510, position: 'absolute', background: 'rgba(255, 255, 255, 0)' }}>
        <div style={{ width: 54, height: 50.83, left: 9, top: 5.08, position: 'absolute', border: '4px #F3F3F3 solid' }}></div>
      </div>
      <div style={{ width: 414, height: 111, padding: 12, left: 753, top: 742, position: 'absolute', background: '#CF7C20', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
        <div style={{ color: '#F5F5F5', fontSize: 48, fontFamily: 'Inter', fontWeight: '400', lineHeight: 57.60, wordWrap: 'break-word' }}>Cerrar sesión</div>
      </div>
    </div>
  );
};

export default Menuabm;