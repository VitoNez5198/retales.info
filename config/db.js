// Requerir el módulo 'pg' para la conexión con PostgreSQL
const { Pool } = require('pg');

// Cargar las variables de entorno del archivo .env (si estás usando dotenv)
require('dotenv').config();

// Configuración de la conexión
const pool = new Pool({
    user: process.env.DB_USER,         // Usuario de la base de datos
    host: process.env.DB_HOST,         // Dirección del servidor (localhost o IP)
    database: process.env.DB_NAME,     // Nombre de la base de datos
    password: process.env.DB_PASSWORD, // Contraseña de la base de datos
    port: process.env.DB_PORT || 5432, // Puerto (por defecto 5432)
});

// Verificar si la conexión es exitosa
pool.connect()
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos', err.stack);
    });

// Exportar el pool de conexiones para usarlo en otras partes del proyecto
module.exports = pool;
