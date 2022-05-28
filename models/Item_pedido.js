module.exports = (sequelize,DataTypes) => {
    let item_pedido = sequelize.define(
        'Item_pedido',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            quantidade: {
                type: DataTypes.TINYINT(1),
                allowNull: true
            },
            pedidos_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "pedidos"
                  },
                  key:"id"
                }
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
            },
            produtos_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "produtos"
                  },
                  key:"id"
                }
            }
        },
        {
            tableName: 'itens_pedidos',
            timestamps: true,
        }
    )
    item_pedido.associate = (models) => {}

    return item_pedido;
}