const db = require('../config/dbConfig');

class Producto {
    getProductos(callback) {
        const sql = `
            SELECT p.id_producto, p.nombre, p.precio, p.stock, c.nombre AS categoria 
            FROM productos p 
            INNER JOIN categorias c ON p.id_categoria = c.id_categoria
        `;
        db.query(sql, callback);
    }

    getProductoById(id, callback) {
        const sql = "SELECT * FROM productos WHERE id_producto = ?";
        db.query(sql, [id], callback);
    }

    createProducto(data, callback) {
        const sql = "INSERT INTO productos (nombre, precio, stock, id_categoria) VALUES (?, ?, ?)";
        db.query(sql, [data.nombre, data.precio, data.stock, data.id_categoria], callback);
    }

    updateProducto(id, data, callback) {
        const sql = "UPDATE productos SET nombre = ?, precio = ?, stock = ?, id_categoria = ? WHERE id_producto = ?";
        db.query(sql, [data.nombre, data.precio, data.stock, data.id_categoria, id], callback);
    }

    deleteProducto(id, callback) {
        const sql = "DELETE FROM productos WHERE id_producto = ?";
        db.query(sql, [id], callback);
    }
}

module.exports = new Producto();