module.exports = (sequelize,DataTypes) => {
    let mesa = sequelize.define(
        'Mesa',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            status: {
                type: DataTypes.TINYINT(1),
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            duracao: {
                type: DataTypes.STRING(100),
            },
            frequencia_encontros: {
                type: DataTypes.STRING(100),
            },
            max_players: {
                type: DataTypes.TINYINT(1),
                allowNull: false
            },
            campanha: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            regras: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            sistema: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            cover_img: {
                type: DataTypes.STRING,
                allowNull: false
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
            }            
        },
        {
            tableName: 'mesas',
            timestamps: true,
        }
    )
    mesa.associate = (models) => {}

    return mesa;
}