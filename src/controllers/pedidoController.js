const pedidoModel = require('../models/pedidoModel');

class PedidoController {
    getPedidos(req, res) {
        pedidoModel.getPedidos((err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar pedidos', details: err });
            res.json(results);
        });
    }
    getPedidoById(req, res) {
        pedidoModel.getPedidoById(req.params.id, (err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar pedido', details: err });
            if (results.length === 0) return res.status(404).json({ mensaje: 'Pedido no encontrado' });
            res.json(results[0]);
        });
    }
    createPedido(req, res) {
        pedidoModel.createPedido(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al crear pedido', details: err });
            res.status(201).json({ mensaje: 'Pedido creado con éxito', id: result.insertId });
        });
    }
    updatePedido(req, res) {
        pedidoModel.updatePedido(req.params.id, req.body, (err) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar pedido', details: err });
            res.json({ mensaje: 'Pedido actualizado correctamente' });
        });
    }
    deletePedido(req, res) {
        pedidoModel.deletePedido(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: 'Error al eliminar pedido', details: err });
            res.json({ mensaje: 'Pedido eliminado correctamente' });
        });
    }
}

module.exports = new PedidoController();