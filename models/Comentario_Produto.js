module.exports = (sequelize,DataTypes) => {
    let comentarioProduto = sequelize.define(
        'Comentario_Produto',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING(50),  
            },
            comentario: {
                type: DataTypes.STRING,
                allowNull: false
            },
            rating: {
                type: DataTypes.TINYINT(1)
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
            tableName: 'comentarios_produtos',
            timestamps: true,
        }
    )
    comentarioProduto.associate = (models) => {
        comentarioProduto.belongsTo(models.Produto, {foreignKey: "produtos_id", as:"produto"})
    }

    return comentarioProduto;
}