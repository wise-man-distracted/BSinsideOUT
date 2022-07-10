const {Artigo, sequelize} = require('../models');

Artigo.findByPk(1, {include: ["autor", "comentadores"]}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)