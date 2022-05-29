module.exports = (sequelize,DataTypes) => {
    let usuarioInMesa = sequelize.define(
        'Usuario_in_Mesa',
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
    usuarioInMesa.associate = (models) => {}

    return usuarioInMesa;
}