const { Produto } = require('../models');

module.exports = {
    deletarProduto: async (req, res) => {
        const { id } = req.body
        let produto
        try {
            produto = await Produto.findOne({where:{id}, raw: true, nest: true})
            res.send(produto)
        } catch (error) {
            res.send(error)
        }
    },
    
}