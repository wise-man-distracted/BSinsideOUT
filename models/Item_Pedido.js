module.exports = (sequelize,DataTypes) => {
    let itemPedido = sequelize.define(
        'Item_Pedido',
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
    itemPedido.associate = (models) => {
      itemPedido.belongsTo(models.Pedido, {foreignKey: "pedidos_id", as:"item"},)
    }

    return itemPedido;
}