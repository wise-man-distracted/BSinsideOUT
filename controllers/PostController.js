const { Usuario } = require('../models');
const bcrypt = require('bcrypt')

module.exports = {
    login : async (req, res) => {
        const loginFail = {error: "Falha no login"}
        const { email, senha } = req.body
        let u

        try {
            u = await Usuario.findOne({where:{email}})
        } catch (error) {
            return res.status(500).json({error:'Erro interno. Tente novamente mais tarde.'})
        }

        if(u === null) {
            return res.status(403).json(loginFail)
        }

        let senhaOk = bcrypt.compareSync(senha, u.senha)
        if(senhaOk) {
            req.session.usuario = u;
            res.redirect("/");
        }
    },
    cadastrar : async (req, res) => {
        const { nome, email, senha, classe, nascimento } = req.body
        const hash = bcrypt.hashSync(senha, 10)
        const verificarUsuarioCadastrado = await Usuario.findOne({where:{email:email}})

        if (verificarUsuarioCadastrado) {
            
        }

    },
}