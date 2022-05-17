module.exports = (sequelize,DataTypes) => {
    let artigo = sequelize.define(
        'Artigo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            titulo: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            conteudo: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            img_1: {
                type: DataTypes.STRING,
                allowNull: false
            },
            img_2: {
                type: DataTypes.STRING
            },
            img_3: {
                type: DataTypes.STRING
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
            categorias_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "categorias_artigos"
                  },
                  key:"id"
                }
            }            
        },
        {
            tableName: 'artigos',
            timestamps: true,
        }
    )
    artigo.associate = (models) => {}

    return artigo;
}