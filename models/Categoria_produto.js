module.exports = (sequelize,DataTypes) => {
    let categoria_produto = sequelize.define(
        'Categoria_produto',
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
            },
            img: {
                type: DataTypes.STRING
            },    
        },
        {
            tableName: 'categorias_produtos',
            timestamps: true,
        }
    )
    categoria_produto.associate = (models) => {}

    return categoria_produto;
}