const { Produto, Artigo } = require('../models');

module.exports = {
  showHomePage: (req, res) => {
    res.render("index");
  },
  // Change the layouts of the following routes to reference the right css file
  showAbout: (req, res) => {
    res.render("about", {});
  },
  showProduto: async (req, res) => {
    let id = req.params.id
    let produto; let descricoes; let preco

    try {
      produto = await Produto.findOne({where:{id}})
      produto = produto.dataValues
      descricoes = produto.descricao.split('\n')
      preco = String(produto.preco).slice(0, String(produto.preco).length-2)
      res.render("produto", {produto, descricoes, preco})
    } catch (error) {
      return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", status: 503})
    }
  },
  showCheckout: (req, res) => {
    res.render("checkout"/* , { layout: './layouts/produto' } */);
  },
  showLogin: (req, res) => {
    res.render("login"/* , { layout: './layouts/login' } */);
  },
  showCart: (req, res) => {
    res.render("cart");
  },
  showInside: async (req, res) => {
    let id = req.params.id
    let artigos; let categorias
    try {
      artigos = await Artigo.findAll()
      artigos = artigos.dataValues
      categorias = await Categoria_Artigo.findAll()
      categorias = categorias.dataValues
      console.log(categorias)
    } catch(error) {
      return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", status: 503})
    }
    res.render("inside", {artigos, categorias});
  },
  showArticle: (req, res) => {
    let id = req.params.id

    
    res.render("artigo", {});
  },
  showError: (req, res) => {
    res.render('error', {error: 'Você está visualizando uma mensagem de erro teste para desenvolvimento', status: 418})
  },
  showSuccess: (req, res) => {
    res.render('success', {header: 'DEU CERTO!', msg: "Você está visualizando uma mensagem de sucesso teste para desenvolvimento"})
  },
  showProdutos: (req, res) => {
    res.render('loja', {})
  }
};
