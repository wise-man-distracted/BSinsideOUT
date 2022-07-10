const {Pedido, sequelize} = require('../models');

Pedido.findByPk(1, {include: ["dono", "itens"]}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)