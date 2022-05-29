module.exports = (sequelize,DataTypes) => {
    let categoriaProduto = sequelize.define(
        'Categoria_Produto',
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
    categoriaProduto.associate = (models) => {}

    return categoriaProduto;
}