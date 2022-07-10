const {Usuario, sequelize} = require('../models');

Usuario.findByPk(1, {include: ['artigos', 'pedidos', 'carrinho']}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)