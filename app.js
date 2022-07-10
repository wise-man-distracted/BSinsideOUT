// Imports
const express = require("express");
const layouts = require("express-ejs-layouts");
const session = require("express-session");

// dot env
require('dotenv').config();

// Importar os roteadores
const MainRouter = require("./routes/MainRouter");

// Criar um servidor/aplicação com o express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(session({
//   secret: process.env.SESSION_KEY,
//   resave: false,
//   saveUninitialized: false
// }))

app.use(express.static("public"));
app.use(layouts);

// Configurar o ejs como um template engine
app.set("layout", "./layouts/default");
app.set("view engine", "ejs");

// Usando os roteadores
app.use("/", MainRouter);

// Levantar/rodar/executar a nossa aplicação
app.listen(3000, () => {
  console.log("Aplicação escutando a porta 3000");
});
