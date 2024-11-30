import { useState } from 'react';
import { useParams } from 'react-router-dom';

function VehiclePage() {
    const { patente } = useParams(); // Captura la patente de la URL
    const [expandedSections, setExpandedSections] = useState({
        direccion: false,
        suspension: false,
        frenos: false,
        chasis: false,
    });

    // Estado para manejar la calificación de cada control individualmente
    const [ratings, setRatings] = useState({
        '1.1': null,
        '1.2': null,
        '2.1': null,
        // Agregar más controles según sea necesario
    });

    // Estado para manejar la visibilidad del mensaje de éxito (modal)
    const [successModal, setSuccessModal] = useState(false);

    // Función para alternar la expansión de las secciones
    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Función para manejar el cambio de calificación de un control específico
    const handleRatingChange = (control, rating) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [control]: rating,
        }));
    };

    // Función para obtener la calificación más común en una sección
    const getMostFrequentRating = (controls) => {
        const ratingsList = controls.map(control => ratings[control]);
        const counts = ratingsList.reduce((acc, rating) => {
            if (rating) {
                acc[rating] = (acc[rating] || 0) + 1;
            }
            return acc;
        }, {});
        const mostFrequent = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, null);
        return mostFrequent || "No calificado";
    };

    // Función para manejar el clic en el botón de "Guardar los cambios"
    const handleSaveChanges = () => {
        setSuccessModal(true);
        // Puedes agregar aquí la lógica de guardar los cambios, como hacer un POST a una API o guardar localmente.
        setTimeout(() => {
            setSuccessModal(false); // Ocultar el modal después de 3 segundos
        }, 3000);
    };

    return (
        <div>
            <h1>Formulario RTO del vehículo con patente: {patente}</h1>
            <h2>Controles</h2>
            <table style={tableStyles}>
                <thead>
                <tr>
                    <th style={{ textAlign: 'left' }}>Título</th>
                    <th style={{ textAlign: 'left' }}>Calificación</th>
                </tr>
                </thead>
                <tbody>
                {/* Sección de Sistema de Dirección */}
                <tr>
                    <td colSpan="2" style={{ textAlign: 'left' }}>
                        <strong>1. SISTEMA DE DIRECCIÓN</strong>
                        <span style={{ marginLeft: '10px' }}>
                                Calificación: {getMostFrequentRating(['1.1', '1.2'])}
                            </span>
                        <button
                            onClick={() => toggleSection('direccion')}
                            style={arrowButtonStyles}
                        >
                            ▼
                        </button>
                    </td>
                </tr>
                {expandedSections.direccion && (
                    <>
                        <tr style={controlRowStyles}>
                            <td style={{ textAlign: 'left' }}>1.1. Volante - Columna de Dirección</td>
                            <td>
                                <div style={buttonGroupStyles}>
                                    <button
                                        onClick={() => handleRatingChange('1.1', 'Bien')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['1.1'] === 'Bien' ? 'green' : 'transparent',
                                        }}
                                    >
                                        Bien
                                    </button>
                                    <button
                                        onClick={() => handleRatingChange('1.1', 'Mal')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['1.1'] === 'Mal' ? 'red' : 'transparent',
                                        }}
                                    >
                                        Mal
                                    </button>
                                    <button
                                        onClick={() => handleRatingChange('1.1', 'Más o menos')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['1.1'] === 'Más o menos' ? 'yellow' : 'transparent',
                                        }}
                                    >
                                        Más o menos
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr style={controlRowStyles}>
                            <td style={{ textAlign: 'left' }}>1.2. Sin Reglamentar</td>
                            <td>
                                <div style={buttonGroupStyles}>
                                    <button
                                        onClick={() => handleRatingChange('1.2', 'Bien')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['1.2'] === 'Bien' ? 'green' : 'transparent',
                                        }}
                                    >
                                        Bien
                                    </button>
                                    <button
                                        onClick={() => handleRatingChange('1.2', 'Mal')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['1.2'] === 'Mal' ? 'red' : 'transparent',
                                        }}
                                    >
                                        Mal
                                    </button>
                                    <button
                                        onClick={() => handleRatingChange('1.2', 'Más o menos')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['1.2'] === 'Más o menos' ? 'yellow' : 'transparent',
                                        }}
                                    >
                                        Más o menos
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </>
                )}
                {/* Sección de Tren Delantero */}
                <tr>
                    <td colSpan="2" style={{ textAlign: 'left' }}>
                        <strong>2. Tren Delantero - Tren Trasero - Suspensión</strong>
                        <span style={{ marginLeft: '10px' }}>
                                Calificación: {getMostFrequentRating(['2.1'])}
                            </span>
                        <button
                            onClick={() => toggleSection('suspension')}
                            style={arrowButtonStyles}
                        >
                            ▼
                        </button>
                    </td>
                </tr>
                {expandedSections.suspension && (
                    <>
                        <tr style={controlRowStyles}>
                            <td style={{ textAlign: 'left' }}>2.1. Resortes Helicoidales - Pulmones de Suspensión</td>
                            <td>
                                <div style={buttonGroupStyles}>
                                    <button
                                        onClick={() => handleRatingChange('2.1', 'Bien')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['2.1'] === 'Bien' ? 'green' : 'transparent',
                                        }}
                                    >
                                        Bien
                                    </button>
                                    <button
                                        onClick={() => handleRatingChange('2.1', 'Mal')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['2.1'] === 'Mal' ? 'red' : 'transparent',
                                        }}
                                    >
                                        Mal
                                    </button>
                                    <button
                                        onClick={() => handleRatingChange('2.1', 'Más o menos')}
                                        style={{
                                            ...buttonStyles,
                                            backgroundColor: ratings['2.1'] === 'Más o menos' ? 'yellow' : 'transparent',
                                        }}
                                    >
                                        Más o menos
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </>
                )}
                </tbody>
            </table>

            {/* Botón de "Guardar los cambios" */}
            <button
                onClick={handleSaveChanges}
                style={saveButtonStyles}
            >
                Guardar los cambios
            </button>

            {/* Modal de éxito */}
            {successModal && (
                <div style={modalStyles}>
                    <div style={modalContentStyles}>
                        <p style={modalTextStyles}>Cambios guardados con éxito</p>
                        <button
                            onClick={() => setSuccessModal(false)}
                            style={closeModalButtonStyles}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Estilos
const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
};

const buttonGroupStyles = {
    display: 'flex',
    gap: '10px',
};

const buttonStyles = {
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
};

const arrowButtonStyles = {
    float: 'right',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '20px',
};

const controlRowStyles = {
    marginBottom: '10px',
};

const saveButtonStyles = {
    display: 'block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
};

const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalContentStyles = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '4px',
    textAlign: 'center',
    minWidth: '200px',
};

const modalTextStyles = {
    fontSize: '16px',
    marginBottom: '20px',
};

const closeModalButtonStyles = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default VehiclePage;
