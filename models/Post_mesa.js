module.exports = (sequelize,DataTypes) => {
    let post_mesa = sequelize.define(
        'Post_mesa',
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
    post_mesa.associate = (models) => {}

    return post_mesa;
}