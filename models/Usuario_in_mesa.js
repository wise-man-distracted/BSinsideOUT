module.exports = (sequelize,DataTypes) => {
    let usuario_in_mesa = sequelize.define(
        'Usuario_in_mesa',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            status: {
                type: DataTypes.TINYINT(1)
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
            mesas_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "mesas"
                  },
                  key:"id"
                }
            }   
        },
        {
            tableName: 'usuarios_in_mesas',
            timestamps: true,
        }
    )
    usuario_in_mesa.associate = (models) => {}

    return usuario_in_mesa;
}