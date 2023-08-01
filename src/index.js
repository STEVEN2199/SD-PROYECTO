const app = require('./app');

app.listen( app.get('port') , (req ,res) => {
    console.log('Servidor corriendo en el puerto' , app.get('port'));
});