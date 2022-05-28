// Trocar o nome da model caso queira testar outra
const {Usuario, sequelize} = require('../models');

Usuario.findByPk().then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)