module.exports = {
  showHomePage: (req, res) => {
    res.render("index");
  },
  showCadastro: (req, res) => {
    res.render("cadastro");
  },
  showProdutos: (req, res) => {
    res.render("produto");
  },
  showLogin: (req, res) => {
    res.render("login");
  },
};
