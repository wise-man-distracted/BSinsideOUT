const { Produto, Artigo, Comentario_Produto } = require('../models');

module.exports = {
  showHomePage: (req, res) => {
    res.render("index", {usuario: req.usuario});
  },
  showAbout: (req, res) => {
    res.render("about", {usuario : req.usuario});
  },
  showProduto: async (req, res) => {
    let id = req.params.id
    let produto; let comentarios;

    try {
      produto = await Produto.findOne({where:{id}, raw: true, nest: true})
      comentarios = await Comentario_Produto.findAll({where: {produtos_id: id}, raw: true, nest: true})
      console.log(comentarios)
      res.render("produto", {produto, comentarios, usuario : req.usuario})
    } catch (error) {
      return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", status: 503, usuario : req.usuario})
    }
  },
  showCheckout: (req, res) => {
    res.render("checkout", {usuario : req.usuario});
  },
  showLogin: (req, res) => {
    res.render("login", {usuario : req.usuario});
  },
  showCart: (req, res) => {
    res.render("cart", {usuario : req.usuario});
  },
  showInside: async (req, res) => {
    let id = req.params.id
    let artigos
    try {
      artigos = await Artigo.findAll({include: ['categoria', 'autor'], raw: true, nest: true})
      console.log(artigos[0].autor)
    } catch(error) {
      return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", status: 503, usuario : req.usuario})
    }
    res.render("inside", {artigos, usuario : req.usuario});
  },
  showArticle: (req, res) => {
    let id = req.params.id

    
    res.render("artigo", {usuario : req.usuario});
  },
  showError: (req, res) => {
    res.render('error', {error: 'Você está visualizando uma mensagem de erro teste para desenvolvimento', status: 418, usuario : req.usuario})
  },
  showSuccess: (req, res) => {
    res.render('success', {header: 'DEU CERTO!', msg: "Você está visualizando uma mensagem de sucesso teste para desenvolvimento", usuario : req.usuario})
  },
  showProdutos: async (req, res) => {
    
    let produto; let descricoes; let preco
    
    try {
      produtos = await Produto.findAll({include: 'categoria', raw: true, nest: true})
      res.render("loja", {produtos, usuario : req.usuario})
    } catch (error) {
      return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", status: 503, usuario : req.usuario})
    }
  
  }
};
