const express = require("express");

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.showHomePage);
router.get('/cadastro', indexController.showCadastro);
router.get('/produtos/:id', indexController.showProdutos);
router.get('/login', indexController.showLogin);
router.get('/theme', indexController.showThemingKit);
router.get('/inside', indexController.showInside);



// Exportar o roteador
module.exports = router;