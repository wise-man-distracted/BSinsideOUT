const express = require("express");

const GetController = require('../controllers/GetController');
const PostController = require("../controllers/PostController");
const loginCheck = require("../middlewares/loginCheck");

const router = express.Router();

router.get('/', loginCheck, GetController.showHomePage);
router.get('/about', loginCheck, GetController.showAbout);
router.get('/produto/:id', loginCheck, GetController.showProduto);
router.get('/checkout', loginCheck, GetController.showCheckout);
router.get('/login', loginCheck, GetController.showLogin);
router.get('/cart', loginCheck, GetController.showCart);
router.get('/inside', loginCheck, GetController.showInside);
router.get('/artigo/:id', loginCheck, GetController.showArticle);
router.get('/error', loginCheck, GetController.showError);
router.get('/success', loginCheck, GetController.showSuccess);
router.get('/loja', loginCheck, GetController.showProdutos);
router.get('/sair', (req, res) => {
    req.session.usuario = ""
    req.usuario = ""
    res.render('index', {usuario: ""})
})

router.post('/login', PostController.login)
router.post('/cadastro', PostController.cadastrar)


module.exports = router;