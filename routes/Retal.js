// routes/retal.js
const express = require('express');
const router = express.Router();

// Asegúrate de que el nombre del archivo sea correcto y que uses la ruta relativa
const retalesController = require('../controllers/retalesController');

// Ruta para crear un retal
router.post('/', retalesController.createRetal);

// Ruta para obtener todos los retales
router.get('/', retalesController.getAllRetales);

// Ruta para actualizar un retal
router.put('/:id', retalesController.updateRetal);

// Ruta para eliminar un retal
router.delete('/:id', retalesController.deleteRetal);

module.exports = router;
