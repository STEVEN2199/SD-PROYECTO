const { Module } = require('module');
const {db} = require('../confirguracion/configuracion_firebase');

const controlador = {};

controlador.subirDocumento = (coleccion , {documentos}) => {
    //console.log(documentos);
    documentos.map(doc => db.collection(coleccion).doc(doc.id).set(Object.assign({}, doc)));
}


controlador.cargarDocumentos =  (coleccion ,res ) => {
    db.collection(coleccion).get().then((querySnapshot) => {
        const json = {
            coleccionName: coleccion,
            datos: []
        }
        querySnapshot.forEach((doc) => {
            console.log( doc.data());
            json.datos.push(doc.data())
        });
        res.status(200).json(json);
    });
}



module.exports = controlador;