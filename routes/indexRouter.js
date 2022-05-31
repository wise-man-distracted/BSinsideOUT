const express = require("express");

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.showHomePage);
router.get('/cadastro', indexController.showCadastro);
router.get('/produtos/:id', indexController.showProdutos);
router.get('/checkout', indexController.showCheckout);
router.get('/login', indexController.showLogin);
router.get('/theme', indexController.showThemingKit);
router.get('/inside', indexController.showInside);
router.get('/artigo/:id', indexController.showArticle);



// Exportar o roteador
module.exports = router;