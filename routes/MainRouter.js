const express = require("express");

const GetController = require('../controllers/GetController');
const PostController = require("../controllers/PostController");

const router = express.Router();

router.get('/', GetController.showHomePage);
router.get('/cadastro', GetController.showCadastro);
router.get('/produtos/:id', GetController.showProdutos);
router.get('/checkout', GetController.showCheckout);
router.get('/login', GetController.showLogin);
router.get('/theme', GetController.showThemingKit);
router.get('/inside', GetController.showInside);
router.get('/artigo/:id', GetController.showArticle);

router.post('/login', PostController.login)
router.post('/cadastro', PostController.cadastrar)


// Exportar o roteador
module.exports = router;