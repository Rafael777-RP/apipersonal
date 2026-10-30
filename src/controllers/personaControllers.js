const personaModel = require('../models/personaModel');

class PersonaController {
    getClientes(req, res) {
        personaModel.getClientes((err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al consultar clientes', details: err });
            }
            res.json(results);
        });
    }

    getClienteById(req, res) {
        const { id } = req.params;
        personaModel.getClienteById(id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al consultar cliente', details: err });
            }
            if (results.length === 0) {
                return res.status(404).json({ mensaje: 'Cliente no encontrado' });
            }
            res.json(results[0]);
        });
    }

    createCliente(req, res) {
        const data = req.body;
        personaModel.createCliente(data, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error al crear cliente', details: err });
            }
            res.status(201).json({ mensaje: 'Cliente creado con éxito', id: result.insertId });
        });
    }

    updateCliente(req, res) {
        const { id } = req.params;
        const data = req.body;
        personaModel.updateCliente(id, data, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error al actualizar cliente', details: err });
            }
            res.json({ mensaje: 'Cliente actualizado correctamente' });
        });
    }

    deleteCliente(req, res) {
        const { id } = req.params;
        personaModel.deleteCliente(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error al eliminar cliente', details: err });
            }
            res.json({ mensaje: 'Cliente eliminado correctamente' });
        });
    }
}

module.exports = new PersonaController();