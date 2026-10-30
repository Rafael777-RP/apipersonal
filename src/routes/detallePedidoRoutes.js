const express = require('express');
const router = express.Router();
const detallePedidoController = require('../controllers/detallePedidoController');

router.get('/detalle-pedidos', detallePedidoController.getDetalles);
router.get('/detalle-pedidos/:id', detallePedidoController.getDetalleById);
router.post('/detalle-pedidos', detallePedidoController.createDetalle);
router.put('/detalle-pedidos/:id', detallePedidoController.updateDetalle);
router.delete('/detalle-pedidos/:id', detallePedidoController.deleteDetalle);

module.exports = router;