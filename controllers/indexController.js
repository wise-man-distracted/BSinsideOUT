module.exports = {
  showHomePage: (req, res) => {
    res.render("index");
  },
  // Change the layouts of the following routes to reference the right css file
  showCadastro: (req, res) => {
    res.render("cadastro"/* , { layout: './layouts/cadastro' } */);
  },
  showProdutos: (req, res) => {
    res.render("produto"/* , { layout: './layouts/produto' } */);
  },
  showLogin: (req, res) => {
    res.render("login"/* , { layout: './layouts/login' } */);
  },
  showThemingKit: (req, res) => {
    res.render("theming-kit"/* , { layout: './layouts/no-header-footer' } */);
  },
};
