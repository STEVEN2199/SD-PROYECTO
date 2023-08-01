const { cargarDocumentos } = require('../controlador/cargaDatos');
const {db} = require('../confirguracion/configuracion_firebase');
var express = require('express');
var querystring = require('querystring');

var router = express.Router();

router.get('/', (req, res) => {
    cargarDocumentos('HOTELES' , res);
});

router.post('/form' , (req , res) => {
    const registro = req.body;
    if(!registro){
        return res.status(400).json({error: 'No hay datos'});
    }
    const reserva = {
        nombre: registro.nombre,
        correo: registro.correo, 
        telefono: registro.telefono, 
        personas_alojarse: registro.personas_alojarse, 
        fecha_llegada: registro.fecha_llegada, 
        fecha_salida: registro.fecha_salida
    };
    db.collection("RegistroHoteles").add(reserva)
                .then( (docRef) => {
                    console.log("Se creo la reserva con ID: " ,docRef.id);
                    res.status(201).json({
                        success: true,
                        content: {
                            reserva
                        }
                    })
                })
                .catch( (error) => {

                });
    /*
    if(req.method === 'POST'){
        let data_post = '';
        req.on('data' , (data) => {
            data_post += data;
        });
        req.on('end' , () => {
            let data_post_objeto = querystring.parse(data_post);
            const registro = {
                nombre: data_post_objeto.nombre,
                correo: data_post_objeto.correo, 
                telefono: data_post_objeto.telefono, 
                personas_alojarse: data_post_objeto.personas_alojarse, 
                fecha_llegada: data_post_objeto.fecha_llegada, 
                fecha_salida: data_post_objeto.fecha_salida
            };
            db.collection("RegistroHoteles").add(registro)
                .then( (docRef) => {
                    console.log("Se creo la reserva con ID: " ,docRef.id);
                    req.status(201).json({
                        success: true,
                        content: {
                            registro
                        }
                    })
                })
                .catch( (error) => {

                });
        });
    }*/
});

module.exports = router;



