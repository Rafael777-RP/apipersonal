const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/pedidos', pedidoController.getPedidos);
router.get('/pedidos/:id', pedidoController.getPedidoById);
router.post('/pedidos', pedidoController.createPedido);
router.put('/pedidos/:id', pedidoController.updatePedido);
router.delete('/pedidos/:id', pedidoController.deletePedido);

module.exports = router;