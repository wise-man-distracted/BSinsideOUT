module.exports = (sequelize,DataTypes) => {
    let produto = sequelize.define(
        'Produto',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            distribuidor: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            preco: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            rating: {
                type: DataTypes.TINYINT(1),
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
            img_4: {
                type: DataTypes.STRING
            }, 
            estoque: {
                type: DataTypes.INTEGER
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            descricao_curta: {
                type: DataTypes.STRING,
                allowNull: false
            },
            categorias_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "categorias_produtos"
                  },
                  key:"id"
                }
            }                
        },
        {
            tableName: 'produtos',
            timestamps: true,
            paranoid: true
        }
    )
    produto.associate = (models) => {
        produto.belongsToMany(models.Usuario, {foreignKey:"produtos_id", as: "comentadores", through:"comentarios_produtos", otherKey:"usuarios_id", timestamps: false})
        produto.belongsTo(models.Categoria_Produto, {foreignKey: "categorias_id", as:"categoria"})
    }

    return produto;
}