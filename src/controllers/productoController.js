const productoModel = require('../models/productoModel');

class ProductoController {
    getProductos(req, res) {
        productoModel.getProductos((err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar productos', details: err });
            res.json(results);
        });
    }

    getProductoById(req, res) {
        const { id } = req.params;
        productoModel.getProductoById(id, (err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar producto', details: err });
            if (results.length === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
            res.json(results[0]);
        });
    }

    createProducto(req, res) {
        const data = req.body;
        productoModel.createProducto(data, (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al crear producto', details: err });
            res.status(201).json({ mensaje: 'Producto creado con éxito', id: result.insertId });
        });
    }

    updateProducto(req, res) {
        const { id } = req.params;
        const data = req.body;
        productoModel.updateProducto(id, data, (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar producto', details: err });
            res.json({ mensaje: 'Producto actualizado correctamente' });
        });
    }

    deleteProducto(req, res) {
        const { id } = req.params;
        productoModel.deleteProducto(id, (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al eliminar producto', details: err });
            res.json({ mensaje: 'Producto eliminado correctamente' });
        });
    }
}

module.exports = new ProductoController();