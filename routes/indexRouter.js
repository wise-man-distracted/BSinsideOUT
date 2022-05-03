// Importar o express
const express = require("express");

// Importar o ContatosController
const indexController = require('../controllers/indexController');

// Cria o roteador
const router = express.Router();

// Pede para o roteador definir uma rota: (método: get, endereço: /contatos)
router.get('/', indexController.showHomePage);
router.get('/signup', indexController.showCadastro);
router.get('/produtos/:id', indexController.showProdutos);



// Exportar o roteador
module.exports = router;