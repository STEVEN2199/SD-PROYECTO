const app = require('./app');

app.listen(app.get('port'), (req, res) => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});

// Cerrar el cliente de Redis después de detener el servidor
app.on('close', () => {
    client.quit();
});
