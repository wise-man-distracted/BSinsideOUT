module.exports = (sequelize,DataTypes) => {
    let comentarioArtigo = sequelize.define(
        'Comentario_Artigo',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING(50), 
                allowNull: false 
            },
            rating: {
                type: DataTypes.TINYINT(1),
            },
            comentario: {
                type: DataTypes.STRING,
                allowNull: false
            },
            artigos_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "artigos"
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
                },
            }          
        },
        {
            tableName: 'comentarios_artigos',
            timestamps: true,
        }
    )
    comentarioArtigo.associate = (models) => {}

    return comentarioArtigo;
}