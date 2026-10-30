const db = require('../config/dbConfig');

class DetallePedido {
    getDetalles(callback) {
        const sql = `
            SELECT 
                dp.id_detalle, 
                dp.id_pedido, 
                p.nombre AS producto, 
                dp.cantidad, 
                dp.precio_unitario, 
                (dp.cantidad * dp.precio_unitario) AS subtotal 
            FROM detalle_pedidos dp 
            INNER JOIN productos p ON dp.id_producto = p.id_producto
        `;
        db.query(sql, callback);
    }

    getDetalleById(id, callback) {
        const sql = `
            SELECT 
                id_detalle, 
                id_pedido, 
                id_producto, 
                cantidad, 
                precio_unitario, 
                (cantidad * precio_unitario) AS subtotal 
            FROM detalle_pedidos 
            WHERE id_detalle = ?
        `;
        db.query(sql, [id], callback);
    }

    createDetalle(data, callback) {
        const sql = "INSERT INTO detalle_pedidos (id_pedido, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)";
        db.query(sql, [data.id_pedido, data.id_producto, data.cantidad, data.precio_unitario], callback);
    }

    updateDetalle(id, data, callback) {
        const sql = "UPDATE detalle_pedidos SET id_pedido = ?, id_producto = ?, cantidad = ?, precio_unitario = ? WHERE id_detalle = ?";
        db.query(sql, [data.id_pedido, data.id_producto, data.cantidad, data.precio_unitario, id], callback);
    }

    deleteDetalle(id, callback) {
        db.query("DELETE FROM detalle_pedidos WHERE id_detalle = ?", [id], callback);
    }
}

module.exports = new DetallePedido();