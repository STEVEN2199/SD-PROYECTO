const modeloHotel = require('./db_Hotel');
const modeloHospital = require('./db_Hospital');
const modeloRestaurante = require('./db_Restaurante');

const controlador = require('../controlador/cargaDatos');



const inicializarDB  = () => {
    controlador.subirDocumento('HOTELES' , modeloHotel);
    controlador.subirDocumento('HOSPITALES' , modeloHospital); 
    controlador.subirDocumento('RESTAURANTES' , modeloRestaurante);
}
 
module.exports.inicializarDB = inicializarDB;