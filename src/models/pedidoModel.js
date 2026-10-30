const db = require('../config/dbConfig');

class Pedido {
    getPedidos(callback) {
        const sql = `
            SELECT pe.id_pedido, pe.fecha, pe.total, pe.estado, CONCAT(cl.nombre, ' ', cl.apellido) AS cliente 
            FROM pedidos pe 
            INNER JOIN clientes cl ON pe.id_cliente = cl.id_cliente
        `;
        db.query(sql, callback);
    }
    getPedidoById(id, callback) {
        db.query("SELECT * FROM pedidos WHERE id_pedido = ?", [id], callback);
    }
    createPedido(data, callback) {
        db.query("INSERT INTO pedidos (id_cliente, fecha, total, estado) VALUES (?, ?, ?, ?)", [data.id_cliente, data.fecha, data.total, data.estado], callback);
    }
    updatePedido(id, data, callback) {
        db.query("UPDATE pedidos SET id_cliente = ?, fecha = ?, total = ?, estado = ? WHERE id_pedido = ?", [data.id_cliente, data.fecha, data.total, data.estado, id], callback);
    }
    deletePedido(id, callback) {
        db.query("DELETE FROM pedidos WHERE id_pedido = ?", [id], callback);
    }
}

module.exports = new Pedido();