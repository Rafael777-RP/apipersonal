const express = require('express');
const db = require('./src/config/dbConfig');

const personaRoutes = require('./src/routes/personaRoutes');
const productoRoutes = require('./src/routes/productoRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');
const pedidoRoutes = require('./src/routes/pedidoRoutes');
const detallePedidoRoutes = require('./src/routes/detallePedidoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', personaRoutes);
app.use('/api', productoRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', pedidoRoutes);
app.use('/api', detallePedidoRoutes);

app.get('/', (req, res) => {
    res.send('Servidor API corriendo correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});