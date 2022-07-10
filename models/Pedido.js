module.exports = (sequelize,DataTypes) => {
    let pedido = sequelize.define(
        'Pedido',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            frete: {
                type: DataTypes.INTEGER,
            },
            cep: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tipo_pagamento: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            valor_total: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "usuarios"
                  },
                  key:"id"
                }
            }         
        },
        {
            tableName: 'pedidos',
            timestamps: true,
            paranoid: true
        }
    )
    pedido.associate = (models) => {
        pedido.belongsTo(models.Usuario, {foreignKey:"usuarios_id", as: "dono", timestamps: false})
        pedido.belongsToMany(models.Produto, {foreignKey: "pedidos_id", as: "itens", through: "itens_pedidos", otherKey:"produtos_id", timestamps: false})
    }

    return pedido;
}