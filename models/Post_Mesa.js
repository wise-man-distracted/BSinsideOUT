module.exports = (sequelize,DataTypes) => {
    let postMesa = sequelize.define(
        'Post_Mesa',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            pinned: {
                type: DataTypes.TINYINT(1)
            }, 
            status: {
                type: DataTypes.TINYINT(1)
            },
            post: {
                type: DataTypes.TEXT,
                allowNull: false
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
        },
        {
            tableName: 'posts_mesas',
            timestamps: true,
        }
    )
    postMesa.associate = (models) => {}

    return postMesa;
}