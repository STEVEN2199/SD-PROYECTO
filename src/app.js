const express = require('express');
const { inicializarDB } = require('./modelo/cargarDocumentos');
const apiRouter = require('./rutas/rutas');
const indexRouter = require('./rutas/index');
const cors = require('cors');
const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT || 6379; // Si el puerto de Redis es diferente de 6379, cámbialo aquí.

const app = express();
// Configuración de express
app.set("port", process.env.PORT || 8000);

// Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// Inicialización de la base de datos
inicializarDB();


// Aquí es donde configuramos Redis

const client = redis.createClient(REDIS_PORT);

client.on("connect", function() {
    console.log("Conexión exitosa con Redis.");
});

client.on("error", function(err) {
    console.error("Error de conexión con Redis:", err);
});

client.connect();



// Middleware para agregar caché utilizando Redis
app.use(async (req, res, next) => {
    const cacheKey = req.url;
    console.log(cacheKey)

    // Consultar la caché de Redis
    const cacheResponse = await client.get(cacheKey)
    if(cacheResponse){
        console.log("Respuest DEL CACHE: ", cacheResponse)
        res.send(cacheResponse)
    }else{
        next()
    }
});

// Middleware para guardar en caché la respuesta en Redis
app.use((req, res, next) => {
    const cacheKey = req.url;
    
    // Capturar la respuesta antes de enviarla al cliente
    const originalSend = res.send;
    res.send = (body) => {
        // Guardar la respuesta en la caché de Redis
        client.setEx(cacheKey, 3600, body); // Aquí estamos configurando un tiempo de vida de 1 hora (3600 segundos) para la caché.
        originalSend.call(res, body);
    };

    next();
});

// Rutas
app.use('/', indexRouter);
app.use('/api', apiRouter);


module.exports = app;