module.exports = (sequelize,DataTypes) => {
    let categoria_artigo = sequelize.define(
        'Categoria_artigo',
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
    categoria_artigo.associate = (models) => {}

    return categoria_artigo;
}