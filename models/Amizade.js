module.exports = (sequelize,DataTypes) => {
    let amizade = sequelize.define(
        'Amizade',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            usuarios_id1: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "usuarios"
                  },
                  key:"id"
                }
            },
            usuarios_id2: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "usuarios"
                  },
                  key:"id"
                }
            },
            status: {
                type: DataTypes.BOOLEAN
            },   
        },
        {
            tableName: 'amizades',
            timestamps: true,
        }
    )
    amizade.associate = (models) => {}

    return amizade;
}