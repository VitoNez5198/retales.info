// controllers/retalesController.js
const db = require('../config/db'); // Asegúrate de que esté bien importado

// Función para crear un retal
const createRetal = async (req, res) => {
    const { tipo, color, cantidad, medida } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO retales (tipo, color, cantidad, medida) VALUES ($1, $2, $3, $4) RETURNING *',
            [tipo, color, cantidad, medida]
        );
        res.status(201).json({ retal: result.rows[0], message: 'Retal creado correctamente' });
    } catch (error) {
        console.error('Error al crear retal:', error);
        res.status(500).json({ error: 'Error al crear el retal' });
    }
};

// Función para obtener todos los retales
const getAllRetales = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM retales');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener retales:', error);
        res.status(500).json({ error: 'Error al obtener los retales' });
    }
};

// Función para actualizar un retal
const updateRetal = async (req, res) => {
    const { id } = req.params;
    const { tipo, color, cantidad, medida } = req.body;

    try {
        const result = await db.query(
            'UPDATE retales SET tipo = $1, color = $2, cantidad = $3, medida = $4 WHERE id = $5 RETURNING *',
            [tipo, color, cantidad, medida, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Retal no encontrado' });
        }

        res.json({ retal: result.rows[0], message: 'Retal actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar retal:', error);
        res.status(500).json({ error: 'Error al actualizar el retal' });
    }
};

// Función para eliminar un retal
const deleteRetal = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query('DELETE FROM retales WHERE id = $1', [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Retal no encontrado' });
        }

        res.json({ message: 'Retal eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar retal:', error);
        res.status(500).json({ error: 'Error al eliminar el retal' });
    }
};

// Exportar las funciones del controlador
module.exports = {
    createRetal,
    getAllRetales,
    updateRetal,
    deleteRetal
};
