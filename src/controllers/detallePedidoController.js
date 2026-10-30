const detallePedidoModel = require('../models/detallePedidoModel');

class DetallePedidoController {
    getDetalles(req, res) {
        detallePedidoModel.getDetalles((err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar detalle de pedidos', details: err });
            res.json(results);
        });
    }
    getDetalleById(req, res) {
        detallePedidoModel.getDetalleById(req.params.id, (err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar detalle', details: err });
            if (results.length === 0) return res.status(404).json({ mensaje: 'Detalle no encontrado' });
            res.json(results[0]);
        });
    }
    createDetalle(req, res) {
        detallePedidoModel.createDetalle(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al crear detalle', details: err });
            res.status(201).json({ mensaje: 'Detalle creado con éxito', id: result.insertId });
        });
    }
    updateDetalle(req, res) {
        detallePedidoModel.updateDetalle(req.params.id, req.body, (err) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar detalle', details: err });
            res.json({ mensaje: 'Detalle actualizado correctamente' });
        });
    }
    deleteDetalle(req, res) {
        detallePedidoModel.deleteDetalle(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: 'Error al eliminar detalle', details: err });
            res.json({ mensaje: 'Detalle eliminado correctamente' });
        });
    }
}

module.exports = new DetallePedidoController();