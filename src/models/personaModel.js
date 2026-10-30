const db = require('../config/dbConfig');

class Cliente {
    // Obtener todos los clientes
    getClientes(callback) {
        const sql = "SELECT id_cliente, documento, nombre, apellido, correo, celular FROM clientes";
        db.query(sql, callback);
    }

    // Obtener un cliente por su ID
    getClienteById(id, callback) {
        const sql = "SELECT id_cliente, documento, nombre, apellido, correo, celular FROM clientes WHERE id_cliente = ?";
        db.query(sql, [id], callback);
    }

    // Crear un nuevo cliente (POST)
    createCliente(data, callback) {
        const sql = "INSERT INTO clientes (documento, nombre, apellido, correo, celular) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [data.documento, data.nombre, data.apellido, data.correo, data.celular], callback);
    }

    // Actualizar un cliente (PUT)
    updateCliente(id, data, callback) {
        const sql = "UPDATE clientes SET documento = ?, nombre = ?, apellido = ?, correo = ?, celular = ? WHERE id_cliente = ?";
        db.query(sql, [data.documento, data.nombre, data.apellido, data.correo, data.celular, id], callback);
    }

    // Eliminar un cliente (DELETE)
    deleteCliente(id, callback) {
        const sql = "DELETE FROM clientes WHERE id_cliente = ?";
        db.query(sql, [id], callback);
    }
}

module.exports = new Cliente();