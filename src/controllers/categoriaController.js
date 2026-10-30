const categoriaModel = require('../models/categoriaModel');

class CategoriaController {
    getCategorias(req, res) {
        categoriaModel.getCategorias((err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar categorías', details: err });
            res.json(results);
        });
    }
    getCategoriaById(req, res) {
        categoriaModel.getCategoriaById(req.params.id, (err, results) => {
            if (err) return res.status(500).json({ error: 'Error al consultar categoría', details: err });
            if (results.length === 0) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
            res.json(results[0]);
        });
    }
    createCategoria(req, res) {
        categoriaModel.createCategoria(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al crear categoría', details: err });
            res.status(201).json({ mensaje: 'Categoría creada con éxito', id: result.insertId });
        });
    }
    updateCategoria(req, res) {
        categoriaModel.updateCategoria(req.params.id, req.body, (err) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar categoría', details: err });
            res.json({ mensaje: 'Categoría actualizada correctamente' });
        });
    }
    deleteCategoria(req, res) {
        categoriaModel.deleteCategoria(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: 'Error al eliminar categoría', details: err });
            res.json({ mensaje: 'Categoría eliminada correctamente' });
        });
    }
}

module.exports = new CategoriaController();