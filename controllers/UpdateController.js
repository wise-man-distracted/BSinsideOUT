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
    atualizarProduto: async (req, res) => {
        const { id, nome, distribuidor, preco, descricao, descricao_curta, categorias_id } = req.body
        let produto
        try {
            produto = await Produto.findOne({where:{id}, raw: true, nest: true})

            await produto.update({
                nome : nome,
                distribuidor : distribuidor,
                preco : preco,
                descricao : descricao,
                descricao_curta : descricao_curta,
                categorias_id : categorias_id
            })

            // await produto.save({fields: ['nome', 'distribuidor', 'preco', 'descricao', 'descricao_curta', 'categorias_id']})
            res.send("okay")
        } catch (error) {
            res.send(error)
        }


        res.send([id, nome, distribuidor, preco, descricao, descricao_curta, categorias_id])
    }

}