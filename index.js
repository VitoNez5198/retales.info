// index.js
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// Importar rutas con rutas relativas
const retalesRoutes = require('routes/retal.js'); // Ruta correcta
const userRoutes = require('routes/user.js'); // Ruta correcta

// Importar la configuración de la base de datos
require('./config/db');

// Configura middleware
app.use(cors());
app.use(express.json()); // Para que el servidor pueda leer JSON en el cuerpo de las solicitudes

// Rutas API
app.use('/api/retales', retalesRoutes); // Rutas CRUD para retales
app.use('/api/users', userRoutes); // Rutas para autenticación de usuarios

// Ruta para verificar si el servidor está activo (opcional)
app.get('/api/status', (req, res) => {
    res.json({ message: 'Servidor en funcionamiento' });
});

// Configura el puerto en el que correrá el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
