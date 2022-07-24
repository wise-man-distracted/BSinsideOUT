const { Produto } = require('../models');

module.exports = {
    deletarProduto: async (req, res) => {
        const { id } = req.body
        let produto
        try {
            produto = await Produto.destroy({where:{id}})
            res.render('success', {msg: "Produto deletado com sucesso.", header: "SUCESSO", usuario: req.usuario})
        } catch (error) {
            res.send(error)
        }
    },
    atualizarProduto: async (req, res) => {
        const { id, nome, distribuidor, descricao, descricao_curta, categorias_id } = req.body
        let produto
        try {
            produto = await Produto.findOne({where:{id}})

            await produto.update({
                nome : nome,
                distribuidor : distribuidor,
                descricao : descricao,
                descricao_curta : descricao_curta,
                categorias_id : categorias_id
            })

            // await produto.save({fields: ['nome', 'distribuidor', 'preco', 'descricao', 'descricao_curta', 'categorias_id']})
            res.render('success', {header: "SUCESSO", msg: "Produto atualizado com sucesso", usuario: req.usuario})
        } catch (error) {
            res.send(error)
        }
    }

}