// controllers/authcontroller.js
const bcrypt = require('bcrypt'); // Para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Para generar tokens
const db = require('../config/db'); // Asegúrate de que la conexión a la base de datos esté bien configurada

// Función para registrar un nuevo usuario
const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña
        const result = await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id', [username, email, hashedPassword]);
        res.status(201).json({ id: result.rows[0].id, message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error registrando usuario:', error);
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};

// Función para iniciar sesión
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generar token
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error iniciando sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

module.exports = {
    register,
    login
};
