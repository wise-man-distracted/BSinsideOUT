module.exports = (sequelize,DataTypes) => {
    let categoriaArtigo = sequelize.define(
        'Categoria_Artigo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            }          
        },
        {
            tableName: 'categorias_artigos',
            timestamps: true,
        }
    )
    categoriaArtigo.associate = (models) => {
        categoriaArtigo.hasMany(models.Artigo, {foreignKey: "categorias_id", as:"artigos"},)
    }

    return categoriaArtigo;
}