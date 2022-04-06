let express = require('express');
let cors = require("cors");

let app = express();

//Middlewares
app.use(cors());
app.use(express.json());


//Endpoint
app.get("/", (req, res) => {
    res.json({status: 200, message:"Bienvenido a la ruta raíz del servidor"});
});

app.post("/user", (req, res) => {
    res.json({status: 200, message: "El usuario se guardó correctamente en la base de datos"});
});

app.listen(5050, () => {
    console.log("Servidor iniciado en el puerto " + 5050)
});