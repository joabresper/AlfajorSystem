import { useParams } from 'react-router-dom';

function VehiclePage() {
    const { patente } = useParams(); // Captura la patente de la URL

    // Lógica para mostrar información relacionada con la patente
    return (
        <div>
            <h1>Formulario RTO del vehículo con patente: {patente}</h1>
            {/* Mostrar información del vehículo */}
        </div>
    );
}

export default VehiclePage;