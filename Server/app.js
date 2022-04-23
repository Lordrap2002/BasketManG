let express = require('express');
let cors = require("cors");
const { Client } = require("pg");
const req = require('express/lib/request');

const dbClient = new Client({
    connectionString: "postgresql://postgres:Salijada2002@localhost:5432/BMGdatabase"
});

let app = express();

//Middlewares
app.use(cors());
app.use(express.json());

dbClient.connect(error => {
    if (error) console.log("Error al conectar a db: ", error);
    else console.log("Conectado a db");
});

//Endpoint
app.get("/", (req, res) => {
    res.json({status: 200, message:"Bienvenido a la ruta raíz del servidor"});
});

app.get("/usuarios", (req, res) =>{
    let sql = 'SELECT * FROM "Usuarios"';
    dbClient.query(sql, (error, db_response) =>{
        let responseData = {};
        if (error){
            responseData = {data: null, status: 500, message: "Error interno de la db."};
        }else if (db_response.rows.length === 0){
            responseData = {data: [], status: 404, message: "No se encontraron registros."};
        }else{
            responseData = {data: db_response.rows, status: 200, message: "Usuarios encontrados exitosamente."};
        }
        res.json(responseData);
    });
});

app.get("/usuarios/:codigo_usuario", (req, res) =>{
    let codigo_usuario = req.params.codigo_usuario;
    let values = [codigo_usuario];
    let sql = 'SELECT * FROM "Usuarios" WHERE codigo_usuario = $1';
    dbClient.query(sql, values, (error, db_response) =>{
        let responseData = {};
        if (error){
            responseData = {data: null, status: 500, message: "Error interno de la db."};
        }else if (db_response.rows.length === 0){
            responseData = {data: [], status: 404, message: "No se encontraron registros."};
        }else{
            responseData = {data: db_response.rows, status: 200, message: "Usuario encontrado exitosamente."};
        }
        res.json(responseData);
    });
});

app.get("/usuarios_email/:codigo_usuario", (req, res) =>{
    let codigo_usuario = req.params.codigo_usuario;
    let values = [codigo_usuario];
    let sql = 'SELECT * FROM "Usuarios" WHERE codigo_usuario = $1';
    dbClient.query(sql, values, (error, db_response) =>{
        let responseData = {};
        if (error){
            responseData = {data: null, status: 500, message: "Error interno de la db."};
        }else if (db_response.rows.length === 0){
            responseData = {data: [], status: 404, message: "No se encontraron registros."};
        }else{
            responseData = {data: db_response.rows, status: 200, message: "Usuario encontrado exitosamente."};
        }
        res.json(responseData.data[0].email);
    });
});

app.post("/user", (req, res) => {
    res.json({status: 200, message: "El usuario se guardó correctamente en la base de datos"});
});

app.listen(5050, () => {
    console.log("Servidor iniciado en el puerto " + 5050)
});