module.exports = (sequelize,DataTypes) => {
    let inbox = sequelize.define(
        'Inbox',
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
            msg: {
                type: DataTypes.STRING
            }     
        },
        {
            tableName: 'inbox',
            timestamps: true,
        }
    )
    inbox.associate = (models) => {}

    return inbox;
}