import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function formatPascalCase(text) {
    return text
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
        .trim();
}

// Datos de verificaciones para los controles
const verificationData = {
    sistemadedireccion: [
        { id: "Volante - columna de dirección 1.1.1", name: "Estado y fijación", allowed: ["L", "M", "G"], severity: "N" },
        { id: "Volante - columna de dirección 1.1.2", name: "Juego axial - radial", allowed: ["L", "M", "G"], severity: "N" },
        { id: "Volante - columna de dirección 1.1.3", name: "Juego angular excesivo en el volante (30° o superior)", allowed: ["M", "G"], severity: "N" },
        { id: "Volante - columna de dirección 1.1.4", name: "Juego en juntas cardánicas y/o manchón", allowed: ["L", "M"], severity: "N" },
        { id: "Volante - columna de dirección 1.1.5", name: "Defectos en columna(s) de dirección (*)", allowed: ["L", "M", "G"], severity: "N" },
        { id: "Volante - columna de dirección 1.1.6", name: "Columna de dirección contiene soldaduras NO ORIGINALES de fábrica.", allowed: ["M", "G"], severity: "N" },
        { id: "Caja De Direccion 1.3.1", name: "Fijación defectuosa de la caja al chasis", allowed: ["L", "M"], severity: "N" },
        { id: "Caja De Direccion 1.3.2", name: "Fisuras a simple vista", allowed: ["L", "M"], severity: "N" },
        { id: "Caja De Direccion 1.3.3", name: "Pérdidas de aceite", allowed: ["L", "M"], severity: "N" },
        { id: "Caja De Direccion 1.3.4", name: "Holguras en la caja de dirección", allowed: ["L", "M", "G"], severity: "N" },
        { id: "Caja De Direccion 1.3.5", name: "Brazo Pitman con deficiencias", allowed: ["M", "G"], severity: "N" },
        { id: "Caja De Direccion 1.3.6", name: "Brazo Pitman soldado o reparado", allowed: ["G"], severity: "N" },
        { id: "Caja De Direccion 1.3.7", name: "Defectuosa estanqueidad del sistema", allowed: ["L", "M"], severity: "N" },
        { id: "Caja De Direccion 1.3.8", name: "Defectuoso accionamiento de la bomba", allowed: ["L", "M"], severity: "N" }
    ],
};

function VehicleControl() {
    const { patente, control } = useParams();
    const [verifications, setVerifications] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // Establecer las verificaciones según el control
        const selectedControl = verificationData[control.toLowerCase()];
        if (selectedControl) {
            setVerifications(selectedControl.map(item => ({ ...item }))); // Asegurarnos de no mutar el estado original
        }
    }, [control]); // Esto se ejecutará cada vez que el control cambie

    // Colores para cada severidad
    const severityColors = {
        N: "green",  // Ninguno
        L: "yellow", // Leve
        M: "orange", // Moderado
        G: "red"     // Grave
    };

    const handleSeverityChange = (id, severity) => {
        setVerifications(prev =>
            prev.map(item =>
                item.id === id ? { ...item, severity } : item
            )
        );
    };

    // Función para contar las severidades
    const countSeverities = () => {
        const counts = { N: 0, L: 0, M: 0, G: 0 };
        verifications.forEach(item => {
            counts[item.severity]++;
        });
        return counts;
    };

    // Función para determinar el estado del vehículo
    const getVehicleStatus = () => {
        const { N, L, M, G } = countSeverities();

        if (G > 0) {
            return "RECHAZADO"; // Vehículo con defectos graves
        } else if (M > 0) {
            return "CONDICIONAL"; // Vehículo con defectos moderados
        } else if (L > 0) {
            return "APTO"; // Vehículo con defectos leves
        }
        return "APTO"; // Por defecto, vehículo sin defectos
    };

    const handleGoBack = () => {
        navigate(-1); // Volvemos atrás en el historial
    };

    return (
        <div>
            <header style={{ padding: "20px", background: "#f0f0f0", textAlign: "center" }}>
                <h1>{formatPascalCase(control)}</h1>
                <p>Mostrando información para el control asociado al vehículo con patente {patente}.</p>
                <h2>Resultado provicional: {getVehicleStatus()}</h2> {/* Resultado basado en las severidades */}
                <div style={styles.container}>
                    <button style={styles.button} onClick={handleGoBack}>
                        Guardar y salir
                    </button>
                    <button style={styles.buttonred} onClick={handleGoBack}>
                        Salir sin guardar
                    </button>
                </div>
            </header>

            <div style={{ padding: "20px" }}>
                {/* Lista desplegable para Volante - columna de dirección */}
                <div>
                    {verifications.length > 0 && verifications.map(item => (
                        <div
                            key={item.id}
                            style={{
                                marginBottom: "10px",
                                padding: "10px",
                                border: `5px solid ${severityColors[item.severity]}`, // Aplicamos el color del borde
                                borderRadius: "20px",
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                boxShadow: "0 0 0 2px gray" // Simula un borde negro adicional
                            }}
                        >
                            <span>{item.id} || {item.name}</span>
                            <div>
                                {["N", "L", "M", "G"].map(severity => (
                                    <button
                                        key={severity}
                                        disabled={!item.allowed.includes(severity) && severity !== "N"}
                                        style={{
                                            margin: "0 5px",
                                            padding: "5px 10px",
                                            cursor: item.allowed.includes(severity) || severity === "N" ? "pointer" : "not-allowed",
                                            backgroundColor: severityColors[severity],
                                            color: "white",
                                            border: "none",
                                            borderRadius: "3px",
                                            opacity: item.allowed.includes(severity) || severity === "N" ? 1 : 0.5
                                        }}
                                        onClick={() => handleSeverityChange(item.id, severity)}
                                    >
                                        {severity}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center', // Distribuye los botones con espacio entre ellos
        gap: '20px', // Espacio entre los botones
        padding: '20px', // Espaciado interno
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        border: 'none',
        backgroundColor: '#CF7C20',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonred: {
        padding: '10px 20px',
        fontSize: '18px',
        border: 'none',
        backgroundColor: '#cf2920',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
};

export default VehicleControl;
