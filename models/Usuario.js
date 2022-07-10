module.exports = (sequelize,DataTypes) => {
    let usuario = sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            foto: {
                type: DataTypes.STRING
            },
            nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            endereco: {
                type: DataTypes.STRING,
            },
            classe: {
                type: DataTypes.BOOLEAN,
            },
            sexo: {
                type: DataTypes.CHAR(1),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING(64),
                allowNull: false
            }                   
        },
        {
            tableName: 'usuarios',
            timestamps: true,
            paranoid: true
        }
    )
    usuario.associate = (models) => {
        usuario.hasMany(models.Artigo, {foreignKey: "usuarios_id", as:"artigos"},)
        
    }

    return usuario;
}