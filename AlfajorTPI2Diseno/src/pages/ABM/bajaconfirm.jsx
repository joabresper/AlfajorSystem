import React from "react";
import { useNavigate } from "react-router-dom";

const BajaConfirmacion = () => {

    const navigate = useNavigate();
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#E6D9B6' }}>
            <img style={{ width: 140, height: 114, position: 'absolute', bottom: 0, left: 0 }} src="/simbolos y alfajores/Alfajorchico.png" />

            <img style={{ width: 277, height: 277, position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', borderRadius: 4 }} src="/simbolos y alfajores/exclamacion.png" />

            <div style={{ width: 856, height: 153, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#FFA500', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word' }}>¿Deseas confirmar eliminación del usuario?</div>
            </div>

            <button
                onClick={() => navigate('/bajaconfirmada')}
                style={{
                    width: 389,
                    height: 114,
                    padding: 12,
                    position: 'absolute',
                    bottom: 20,
                    left: '25%',
                    transform: 'translateX(-50%)',
                    background: '#2C2C2C',
                    borderRadius: 8,
                    overflow: 'hidden',
                    border: '1px #2C2C2C solid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8,
                    display: 'flex',
                    cursor: 'pointer',
                }}
            >
                <span
                    style={{
                        color: '#F5F5F5',
                        fontSize: 48,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        lineHeight: '57.60px',
                        wordWrap: 'break-word',
                    }}
                >
                    Confirmar
                </span>
            </button>
            <button
                onClick={() => navigate(-1)}
                style={{
                    width: 389,
                    height: 114,
                    padding: 12,
                    position: 'absolute',
                    bottom: 20,
                    left: '75%',
                    transform: 'translateX(-50%)',
                    background: '#2C2C2C',
                    borderRadius: 8,
                    overflow: 'hidden',
                    border: '1px #2C2C2C solid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8,
                    display: 'flex',
                    cursor: 'pointer',
                }}
            >
                <span
                    style={{
                        color: '#F5F5F5',
                        fontSize: 48,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        lineHeight: '57.60px',
                        wordWrap: 'break-word',
                    }}
                >
                    Cancelar
                </span>
            </button>

        </div>
    );

};

export default BajaConfirmacion;