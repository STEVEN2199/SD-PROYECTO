const express = require('express');
const hotelRouter = require('./hoteles');
const hospitalRouter = require('./hospitales');
const restauranteRouter = require('./restaurantes');
const { route } = require('./hoteles');

const router = express.Router();

router.use('/hoteles' , hotelRouter);//jorge hizo esto  
router.use('/hospitales', hospitalRouter); // Edwars realizó esto: tabla de hospital, su modelo, cargar documento, y ruta
router.use('/restaurantes', restauranteRouter) // Componente del backend trabajado por Luis
module.exports = router; 