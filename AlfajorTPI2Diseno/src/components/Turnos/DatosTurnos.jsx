const nombresClientes = ["Juan Perez", "Maria Gomez", "Carlos Sanchez", "Ana Martinez", "Luis Rodriguez", "Laura Fernandez", "Pedro Lopez", "Sofia Gonzalez", "Miguel Torres", "Lucia Ramirez"];
const dniClientes = ["12345678", "87654321", "11223344", "44332211", "55667788", "88776655", "99887766", "66778899", "33445566", "66554433"];
const patentes = ["ABC123", "XYZ789", "LMN456", "DEF321", "GHI654", "JKL987", "MNO543", "PQR678", "STU432", "VWX876"];
const modelos = ["Toyota Corolla", "Honda Civic", "Ford Focus", "Chevrolet Cruze", "Volkswagen Golf", "Nissan Sentra", "Hyundai Elantra", "Kia Forte", "Mazda 3", "Subaru Impreza"];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const turnos = [];

const generarTurnos = (inicio, fin) => {
    for (let dia = inicio; dia <= fin; dia++) {
        for (let i = 0; i < 10; i++) {
            turnos.push({
                nombreCliente: getRandomElement(nombresClientes),
                dni: getRandomElement(dniClientes),
                patente: getRandomElement(patentes),
                modelo: getRandomElement(modelos),
                fecha: {
                    dia: dia,
                    mes: 11,
                    año: 2024
                },
                hora: `${8 + Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`
            });
        }
    }
};

// Generar turnos para la primera semana (18 al 22 de noviembre de 2024)
generarTurnos(18, 22);

// Generar turnos para la segunda semana (25 al 29 de noviembre de 2024)
generarTurnos(25, 29);

export default turnos;