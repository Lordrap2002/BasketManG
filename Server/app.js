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

app.get("/nombre_usuario/:codigo_usuario", (req, res) =>{
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
        res.json(responseData.data);
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

app.get("/jugadores_usuario/:codigo_usuario", (req, res) =>{
    let codigo_usuario = req.params.codigo_usuario;
    let values = [codigo_usuario];
    let sql = 'SELECT ju.foto, ju.codigo_jugador FROM "Usuarios" AS us INNER JOIN "Usuarios_Jugadores" AS uj ON us.codigo_usuario=uj.codigo_usuario INNER JOIN "Jugadores" AS ju ON ju.codigo_jugador=uj.codigo_jugador WHERE us.codigo_usuario = $1';
    dbClient.query(sql, values, (error, db_response) =>{
        let responseData = {};
        if (error){
            responseData = {data: null, status: 500, message: "Error interno de la db."};
        }else if (db_response.rows.length === 0){
            responseData = {data: [], status: 404, message: "No se encontraron registros."};
        }else{
            responseData = {data: db_response.rows, status: 200, message: "Usuario encontrado exitosamente."};
        }
        res.json(responseData.data);
    });
});

app.get("/datos_usuarios/:codigo_usuario", (req, res) =>{
    let codigo_usuario = req.params.codigo_usuario;
    let values = [codigo_usuario];
    let sql = 'SELECT us.victorias, us.partidos, us.puntaje, us.liga, us.nivel FROM "Usuarios" AS us WHERE us.codigo_usuario = $1';
    dbClient.query(sql, values, (error, db_response) =>{
        let responseData = {};
        if (error){
            responseData = {data: null, status: 500, message: "Error interno de la db."};
        }else if (db_response.rows.length === 0){
            responseData = {data: [], status: 404, message: "No se encontraron registros."};
        }else{
            responseData = {data: db_response.rows, status: 200, message: "Usuario encontrado exitosamente."};
        }
        res.json(responseData.data);
    });
});

app.get("/datos_jugadores/:codigo_usuario", (req, res) =>{
    let codigo_usuario = req.params.codigo_usuario;
    let values = [codigo_usuario];
    let sql = 'SELECT ju.nombre, ju.ataque, ju.defensa, ju.resistencia, ju.poder, ju.precio, ju.codigo_jugador FROM "Usuarios" AS us INNER JOIN "Usuarios_Jugadores" AS uj ON us.codigo_usuario=uj.codigo_usuario INNER JOIN "Jugadores" AS ju ON ju.codigo_jugador=uj.codigo_jugador WHERE us.codigo_usuario = $1';
    dbClient.query(sql, values, (error, db_response) =>{
        let responseData = {};
        if (error){
            responseData = {data: null, status: 500, message: "Error interno de la db."};
        }else if (db_response.rows.length === 0){
            responseData = {data: [], status: 404, message: "No se encontraron registros."};
        }else{   
            responseData = {data: db_response.rows, status: 200, message: "Usuario encontrado exitosamente."};
        }   
        res.json(responseData.data);
    });
});

app.get("/create_user/:nombre/:email/:contra/:code", (req, res) =>{
    let n = req.params.nombre;
    let e = req.params.email; 
    let c = req.params.contra;
    let co = req.params.code;
    let values = [n,e,c,co,0, 0, 0, 0, "Ninguna", 0];
    let sql = 'INSERT INTO "Usuarios" VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);';
    dbClient.query(sql, values, (error, db_response) =>{
        let responseData = {};   
        if (error){     
            responseData = { status: 500, message: "Error interno de la db."};
        }else{
            responseData = {status: 200, message: "El usuario se guardó correctamente en la base de datos"};   
        }
        res.json(responseData.message);
    }); 
});

app.get("/comprar_jugador/:us/:ju/:num", (req, res) =>{
    let us = req.params.us;
    let ju = req.params.ju;
    let num = req.params.num;
    let values = [us,ju,num];
    let sql = 'INSERT INTO "Usuarios_Jugadores" VALUES ($1,$2,$3);';
    dbClient.query(sql, values, (error, db_response) =>{
        if (error){  
            responseData = { status: 500, message: "Error interno de la db."};
        }else{
            responseData = {status: 200, message: "La comprar se efectuo correctamente en la base de datos"};   
        }
        res.json(responseData.message);
    });
});

app.post("/user/:datos", (req, res) => {
    
    
});

app.listen(5050, () => {
    console.log("Servidor iniciado en el puerto " + 5050)
});