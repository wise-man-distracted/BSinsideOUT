const express = require("express");

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.showHomePage);
router.get('/signup', indexController.showCadastro);
router.get('/produtos/:id', indexController.showProdutos);
router.get("/login", indexController.showLogin);
router.get("/theme", indexController.showThemingKit);



// Exportar o roteador
module.exports = router;