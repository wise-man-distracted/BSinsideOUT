const express = require("express");

const GetController = require('../controllers/GetController');
const PostController = require("../controllers/PostController");

const router = express.Router();

router.get('/', GetController.showHomePage);
router.get('/about', GetController.showAbout);
router.get('/produto/:id', GetController.showProduto);
router.get('/checkout', GetController.showCheckout);
router.get('/login', GetController.showLogin);
router.get('/cart', GetController.showCart);
router.get('/inside', GetController.showInside);
router.get('/artigo/:id', GetController.showArticle);
router.get('/error', GetController.showError);
router.get('/success', GetController.showSuccess);
router.get('/loja', GetController.showProdutos);

router.post('/login', PostController.login)
router.post('/cadastro', PostController.cadastrar)


module.exports = router;