const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(express.text())
app.use(cors())

const port = process.env.PORT || 8082; 

app.get('/clientes', (req,res) => {
    //console.log(req.query.control)
    res.json({mensaje: "Peticion get del cliente"})
})

app.get('/proveedores', (req,res) => {
    //console.log(req.body.nombre)
    res.json({mensaje: "Peticion get del proveedor"})
})

app.use((req,res) => {
    res.status(404).json({estado: "Pagina o Ruta No Encontrada"})
    // res.json({estado: "Pagina o Ruta No Encontrada"})
})

app.listen(port,()=> {
    console.log(`Servidor express corriendo y escuchando en el puerto ${port}`)
})