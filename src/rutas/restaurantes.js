const { cargarDocumentos } = require('../controlador/cargaDatos');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    cargarDocumentos('RESTAURANTES' , res);
});

module.exports = router;

