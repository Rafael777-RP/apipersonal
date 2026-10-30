const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaControllers');

router.get('/clientes', personaController.getClientes);
router.get('/clientes/:id', personaController.getClienteById);
router.post('/clientes', personaController.createCliente);
router.put('/clientes/:id', personaController.updateCliente);
router.delete('/clientes/:id', personaController.deleteCliente);

module.exports = router;