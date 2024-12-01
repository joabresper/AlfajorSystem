import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VehicleCard = ({ vehicle, onMoreInfo }) => {
    const navigate = useNavigate();
    // Ruta de la imagen del vehículo
    const imagePath = `../../autos/auto${vehicle.Marca.replace(/\s+/g, "")}${vehicle.Modelo.replace(/\s+/g, "")}.png`;

    // Control de errores de carga de imagen
    const [imageError, setImageError] = useState(false);

    const handleError = () => {
        setImageError(true);
    };

    const imageSrc = imageError
        ? "../../autos/autoNoEncontrado.png" // Imagen por defecto si no se encuentra la imagen del vehículo
        : imagePath;

    return (
        <div
            className="card"
            style={{
                width: "25rem", // Tamaño de la carta aumentado
                margin: "1rem",
                border: "none", // Sin borde
            }}
        >
            {/* Imagen del vehículo */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "16rem", // Fijamos la altura para que no se estire
                    overflow: "hidden",
                }}
            >
                <img
                    src={imageSrc}
                    alt={`${vehicle.Marca} ${vehicle.Modelo}`}
                    onError={handleError} // Maneja el error si no se carga la imagen
                    style={{
                        objectFit: "contain", // Mantener la proporción original de la imagen
                        width: "100%", // Hacer que ocupe el 100% de la anchura disponible
                        height: "auto", // Mantener proporción de la altura
                    }}
                />
            </div>
            {/* Información del vehículo */}
            <div
                style={{
                    borderTop: "2px solid #ccc", // Borde superior
                    padding: "1rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra aplicada aquí
                }}
            >
                <h5 className="card-title">{`${vehicle.Marca} ${vehicle.Modelo}`}</h5>
                <p className="card-text">Patente: {vehicle.Patente}</p>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn custom-btn"
                        onClick={() => navigate(`/Vehiculos/${vehicle.Patente}`)}
                    >
                        Rellenar formulario RTO
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => onMoreInfo(vehicle)} // Llamamos a la función onMoreInfo
                    >
                        Más info
                    </button>
                </div>
            </div>
        </div>
    );
};

const VehicleList = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState(""); // Estado para la barra de búsqueda
    const [selectedVehicle, setSelectedVehicle] = useState(null); // Estado para el vehículo seleccionado para mostrar más info
    const vehicles = [
        { Marca: "Mercedes Benz", Modelo: "Glc 300", Patente: "ABC123", Año: 2020, FechaIngreso: "2023-01-15", Dueno: "Juan Perez", Dni: "12345678", OtrosRetirar: "Ana Lopez, Pedro Martinez" },
        { Marca: "Toyota", Modelo: "Corolla", Patente: "XYZ456", Año: 2021, FechaIngreso: "2023-02-20", Dueno: "Carlos Gomez", Dni: "23456789", OtrosRetirar: "María Perez" },
        { Marca: "Ford", Modelo: "Ranger", Patente: "LMN789", Año: 2020, FechaIngreso: "2023-03-10", Dueno: "Ricardo Fernandez", Dni: "34567890", OtrosRetirar: "Luis Torres" },
        { Marca: "BMW", Modelo: "X5", Patente: "JKL890", Año: 2019, FechaIngreso: "2023-04-05", Dueno: "Jorge Ramirez", Dni: "45678901", OtrosRetirar: "No hay otras personas" },
        { Marca: "Chevrolet", Modelo: "Cruze", Patente: "OPQ345", Año: 2018, FechaIngreso: "2023-05-12", Dueno: "Verónica Sánchez", Dni: "56789012", OtrosRetirar: "Laura Díaz" },
        { Marca: "Volkswagen", Modelo: "Golf", Patente: "RST678", Año: 2021, FechaIngreso: "2023-06-18", Dueno: "Santiago Torres", Dni: "67890123", OtrosRetirar: "Carlos Rodríguez" },
        { Marca: "Audi", Modelo: "A4", Patente: "UVW901", Año: 2022, FechaIngreso: "2023-07-23", Dueno: "Lucía Martínez", Dni: "78901234", OtrosRetirar: "Javier Fernández" },
        { Marca: "Hyundai", Modelo: "Tucson", Patente: "GHI567", Año: 2020, FechaIngreso: "2023-08-30", Dueno: "Marta Gómez", Dni: "89012345", OtrosRetirar: "No hay otras personas" },
        { Marca: "Chevrolet", Modelo: "Cruze", Patente: "DEF234", Año: 2021, FechaIngreso: "2023-09-10", Dueno: "Juan Pérez", Dni: "90123456", OtrosRetirar: "Carlos Méndez" },
        { Marca: "Kia", Modelo: "Sportage", Patente: "MNO789", Año: 2019, FechaIngreso: "2023-10-01", Dueno: "Ricardo Sánchez", Dni: "01234567", OtrosRetirar: "Ana Torres" },
    ];

    // Filtrar vehículos según la patente ingresada
    const filteredVehicles = vehicles.filter((vehicle) =>
        vehicle.Patente.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Función para mostrar la información del vehículo en el modal
    const handleMoreInfo = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    // Cerrar el modal
    const closeModal = () => {
        console.log("Cerrar modal");
        setSelectedVehicle(null); // Esto debería cerrar el modal
    };
    

    return (
        <div style={{width:'100%', height:'300vh', backgroundColor:'#E3D9B4'}}>
            <div className="container" >
                {/* Header con título y barra de búsqueda */}
                <header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem",
                        marginBottom: "1.5rem",
                        backgroundColor: "#f8f9fa",
                        borderBottom: "2px solid #ccc",
                    }}
                >
                    <h1 style={{ margin: 0 }}>Vehículos asignados</h1>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por patente..."
                        style={{ width: "300px" }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="btn custom-btn"
                        onClick={() => navigate(-1)}
                    >
                        Volver
                    </button>
                </header>

                {/* Lista de vehículos */}
                <div className="row">
                    {filteredVehicles.length > 0 ? (
                        filteredVehicles.map((vehicle, index) => (
                            <div className="col-md-4" key={index}>
                                <VehicleCard vehicle={vehicle} onMoreInfo={handleMoreInfo} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No se encontraron vehículos con esa patente.</p>
                    )}
                </div>
                {/* Modal con la información del vehículo */}
                {selectedVehicle && (
                    <div
                        className="modal"
                        style={{
                            display: "block",
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro
                            zIndex: 1050,
                        }}
                        onClick={closeModal} // Cerrar el modal al hacer clic en el fondo
                    >
                        <div
                            className="modal-dialog"
                            style={{
                                maxWidth: "900px",
                                margin: "50px auto",
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                zIndex: 1060,
                            }}
                            onClick={(e) => e.stopPropagation()} // Evita que el clic en el diálogo cierre el modal
                        >
                            <div className="modal-header">
                                <h3 className="modal-title">{`${selectedVehicle.Marca} ${selectedVehicle.Modelo}`}</h3>
                            </div>
                            <div className="modal-body d-flex">
                                <img
                                    src={`../../autos/auto${selectedVehicle.Marca.replace(
                                        /\s+/g,
                                        ""
                                    )}${selectedVehicle.Modelo.replace(/\s+/g, "")}.png`}
                                    alt={`${selectedVehicle.Marca} ${selectedVehicle.Modelo}`}
                                    onError={(e) => {
                                        e.target.onerror = null; // Previene un ciclo infinito si la imagen de "autoNoEncontrado.png" no se carga
                                        e.target.src = "../../autos/autoNoEncontrado.png"; // Cambia la imagen en caso de error
                                    }}
                                    style={{
                                        objectFit: "contain", // Mantener la proporción original de la imagen
                                        width: "200px",
                                        height: "auto",
                                        marginRight: "20px",
                                    }}
                                />
                                <div>
                                    <p><strong>Año:</strong> {selectedVehicle.Año}</p>
                                    <p><strong>Patente:</strong> {selectedVehicle.Patente}</p>
                                    <p><strong>Fecha de Ingreso:</strong> {selectedVehicle.FechaIngreso}</p>
                                    <p><strong>Dueño:</strong> {selectedVehicle.Dueno}</p>
                                    <p><strong>DNI del dueño:</strong> {selectedVehicle.Dni}</p>
                                    <p><strong>Otras personas que pueden retirar:</strong> {selectedVehicle.OtrosRetirar}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VehicleList;
