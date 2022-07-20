const { Usuario } = require('../models');
const bcrypt = require('bcrypt')

module.exports = {
    login : async (req, res) => {
        const { email, senha } = req.body
        let u

        try {
            u = await Usuario.findOne({where:{email}, raw: true, nest: true})
        } catch (error) {
            return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", status: 503})
        }

        if(u === null) {
            return res.render('error', {error: "Você precisa da permissão do cléro para acessar esse ambiente", status: 403})
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
                return res.render('error', {error: "Parece que sua identidade já está sendo usada por outro cavaleiro. Redefina seu email.", status: 409})
            }

            await Usuario.create({nome, nascimento, endereco, sexo, email, senha:hash})
            return res.render('success', {header: "USUÁRIO CADASTRADO COM SUCESSO", msg: "Seja bem-vindo a insideOUT!", usuario: req.usuario})
        } catch (error) {
            return res.render('error', {error: "O servidor pode estar ocupado numa sidequest. Tente novamente mais tarde", usuario: req.usuario, status: 500})
        }

    },
}