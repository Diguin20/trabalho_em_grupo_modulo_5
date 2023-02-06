const {Sequelize}= require('sequelize')

const sequelize = new Sequelize('','root','souz@33531799',{
    host:'localhost',
    dialect:'mysql',
    })

    module.exports = sequelize