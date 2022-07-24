const { Usuario, Comentario_Produto, Produto } = require('../models');
const bcrypt = require('bcrypt')

module.exports = {
    login : async (req, res) => {
        const { email, senha } = req.body
        let u

        try {
            u = await Usuario.findOne({where:{email}, raw: true, nest: true})
        } catch (error) {
            return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", status: 503, usuario: ""})
        }

        if(u === null) {
            return res.render('error', {error: "Você precisa da permissão do cléro para acessar esse ambiente", status: 403, usuario: ""})
        }

        let senhaOk = bcrypt.compareSync(senha, u.senha)
        if(senhaOk) {
            req.session.usuario = u;

            console.log(req.session.usuario)
            res.render('index', {
                logado: true,
                usuario: req.session.usuario
            })
        }
    },
    cadastrar : async (req, res) => {
        try {
            const { nome, nascimento, endereco, sexo, email, senha } = req.body
            const hash = bcrypt.hashSync(senha, 10)
            
            const verificarUsuarioCadastrado = await Usuario.findOne({where:{email:email}})
            if (verificarUsuarioCadastrado) {
                return res.render('error', {error: "Parece que sua identidade já está sendo usada por outro cavaleiro. Redefina seu email.", status: 409, usuario: req.usuario})
            }

            await Usuario.create({nome, nascimento, endereco, sexo, email, senha:hash})
            return res.render('success', {header: "USUÁRIO CADASTRADO COM SUCESSO", msg: "Seja bem-vindo a insideOUT!", usuario: req.usuario})
        } catch (error) {
            return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", usuario: req.usuario, status: 500})
        }

    },
    comentar: async (req, res) => {
        try {
            const { titulo, comentario, idUsuario, idProduto } = req.body
            const produto = await Produto.findOne({where:{id:idProduto}})
            const comentador = await Usuario.findOne({where:{id:idUsuario}})
            await Comentario_Produto.create({titulo, comentario, rating: 9, usuarios_id: idUsuario, produtos_id: idProduto})

            res.redirect("back")
        } catch (error) {
            return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", usuario: req.usuario, status: 500})
        }
    }
}