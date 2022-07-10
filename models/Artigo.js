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
    artigo.associate = (models) => {
        artigo.belongsTo(models.Usuario, {foreignKey: "usuarios_id", as:"autor"})
        artigo.belongsTo(models.Categoria_Artigo, {foreignKey: "categorias_id", as:"categoria"})
        artigo.belongsToMany(models.Usuario, {foreignKey:"artigos_id", as: "comentadores", through:"comentarios_artigos", otherKey:"usuarios_id", timestamps: false})
    }

    return artigo;
}