module.exports = (sequelize,DataTypes) => {
    let comentario_produto = sequelize.define(
        'Comentario_produto',
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
    comentario_produto.associate = (models) => {}

    return comentario_produto;
}