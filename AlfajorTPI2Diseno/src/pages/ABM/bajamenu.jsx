import React from "react";

const BajaMenu = () => {
  return (
    <div style={{ width: 1920, height: 1080, position: 'relative', background: '#E6D9B6' }}>
      <img style={{ width: 140, height: 114, position: 'absolute', left: 0, top: 966 }} src="/simbolos y alfajores/Alfajorchico.png" alt="Alfajorchico" />
      
      <div style={{ padding: 12, position: 'absolute', left: 694, top: 959, background: '#EC221F', borderRadius: 8, overflow: 'hidden', border: '1px #C00F0C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
        <div style={{ color: '#FEE9E7', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: '40px', wordWrap: 'break-word' }}>Dar de Baja Usuario</div>
      </div>
    </div>
  );
};

export default BajaMenu;