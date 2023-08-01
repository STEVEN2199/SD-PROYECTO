const express = require('express');
const { inicializarDB } = require('./modelo/cargarDocumentos');
const apiRouter = require('./rutas/rutas');
const indexRouter = require('./rutas/index');
const cors = require('cors');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient();

redisClient.on('error', (err) => {
  console.error('Error al conectar con Redis:', err);
});

app.set("port", process.env.PORT || 8000);

// Middleware para habilitar el acceso CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));

function cacheMiddleware(req, res, next) {
  const cacheKey = req.originalUrl; // Puedes usar cualquier clave única que identifique la solicitud

  // Verificar si el cliente Redis está conectado
  if (!redisClient.connected) {
    console.error('El cliente Redis no está conectado.');
    // Aquí puedes intentar reconectar el cliente o manejar la situación según tus necesidades.
    return next();
  }

  // Intentar obtener los datos desde la caché
  redisClient.get(cacheKey, (err, cachedData) => {
    if (err) {
      console.error('Error al obtener datos de la caché:', err);
      return next();
    }

    if (cachedData) {
      // Si los datos están en la caché, enviarlos directamente al cliente
      console.log('Datos obtenidos de la caché');

      // Agregar cabeceras para habilitar la caché del navegador
      res.setHeader('Cache-Control', 'public, max-age=3600'); // Aquí, estamos configurando el tiempo de expiración en segundos (1 hora en este caso)
      res.setHeader('Expires', new Date(Date.now() + 3600000).toUTCString()); // 1 hora en milisegundos

      return res.send(cachedData);
    }

    // Si los datos no están en la caché, continuar con la solicitud normal
    console.log('Datos obtenidos desde la fuente de datos original');
    res.sendResponse = res.send;
    res.send = (body) => {
      // Almacena los datos en la caché para futuras solicitudes
      redisClient.setex(cacheKey, 3600, body); // Aquí, estamos configurando el tiempo de expiración en segundos (1 hora en este caso)

      // Agregar cabeceras para habilitar la caché del navegador
      res.setHeader('Cache-Control', 'public, max-age=3600'); // Aquí, estamos configurando el tiempo de expiración en segundos (1 hora en este caso)
      res.setHeader('Expires', new Date(Date.now() + 3600000).toUTCString()); // 1 hora en milisegundos

      res.sendResponse(body);
    };
    next();
  });
}

app.use(cacheMiddleware);

app.use('/', indexRouter);
app.use('/api', apiRouter);

// Inicialización de la base de datos
inicializarDB();

module.exports = app;
