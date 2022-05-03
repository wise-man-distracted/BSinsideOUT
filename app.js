// Imports
const express = require("express");
const layouts = require("express-ejs-layouts");

// Importar os roteadores
const indexRouter = require("./routes/indexRouter");
const cadastroRouter = require("./routes/cadastroRouter");

// Criar um servidor/aplicação com o express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(layouts);

// Configurar o ejs como um template engine
app.set("layout", "./layouts/nav-footer");
app.set("view engine", "ejs");

// Usando os roteadores
app.use("/", indexRouter);
app.use("/", cadastroRouter);

// Levantar/rodar/executar a nossa aplicação
app.listen(3000, () => {
  console.log("Aplicação escutando a porta 3000");
});
