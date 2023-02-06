const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const usuarios = db.define('usuarios',{
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    login:{
        type: DataTypes.STRING
    },
    senha:{
        type: DataTypes.STRING
    },
})

module.exports = usuarios