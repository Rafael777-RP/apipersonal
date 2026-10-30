const db = require('../config/dbConfig');

class Categoria {
    getCategorias(callback) {
        db.query("SELECT * FROM categorias", callback);
    }
    getCategoriaById(id, callback) {
        db.query("SELECT * FROM categorias WHERE id_categoria = ?", [id], callback);
    }
    createCategoria(data, callback) {
        db.query("INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)", [data.nombre, data.descripcion], callback);
    }
    updateCategoria(id, data, callback) {
        db.query("UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_categoria = ?", [data.nombre, data.descripcion, id], callback);
    }
    deleteCategoria(id, callback) {
        db.query("DELETE FROM categorias WHERE id_categoria = ?", [id], callback);
    }
}

module.exports = new Categoria();