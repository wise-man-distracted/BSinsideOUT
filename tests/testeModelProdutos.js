const {Produto, sequelize} = require('../models');

Produto.findByPk(1, {include: ['comentadores', 'categoria']}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)