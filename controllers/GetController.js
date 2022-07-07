module.exports = {
  showHomePage: (req, res) => {
    res.render("index");
  },
  // Change the layouts of the following routes to reference the right css file
  showCadastro: (req, res) => {
    res.render("cadastro", { layout: './layouts/dev' });
  },
  showProdutos: (req, res) => {
    res.render("produto"/* , { layout: './layouts/produto' } */);
  },
  showCheckout: (req, res) => {
    res.render("checkout"/* , { layout: './layouts/produto' } */);
  },
  showLogin: (req, res) => {
    res.render("login"/* , { layout: './layouts/login' } */);
  },
  showThemingKit: (req, res) => {
    res.render("theming-kit"/* , { layout: './layouts/no-header-footer' } */);
  },
  showInside: (req, res) => {
    res.render("inside", { layout: './layouts/inside' });
  },
  showArticle: (req, res) => {
    res.render("article", { layout: './layouts/inside' });
  },
  showError: (req, res) => {
    res.render('error', {error: 'Você está visualizando uma mensagem de erro teste para desenvolvimento', status: 418})
  },
  showSuccess: (req, res) => {
    res.render('success', {header: 'DEU CERTO!', msg: "Você está visualizando uma mensagem de sucesso teste para desenvolvimento"})
  },
};
