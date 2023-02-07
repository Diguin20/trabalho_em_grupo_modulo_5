const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Users = db.define('usuarios',{
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    login:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull:false,
    },
})

const Finances = db.define('finances',{
    tipo:{
        type:DataTypes.BOOLEAN,
    },
    descricao:{
        type:DataTypes.STRING,
    },
    valor:{
        type:DataTypes.STRING,
    },
})

module.exports = Finances
module.exports = Users