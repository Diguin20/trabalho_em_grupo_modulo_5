const {Sequelize}= require('sequelize')

const sequelize = new Sequelize('financial_dashboard','root','',{
    host:'localhost',
    dialect:'mysql',
    })

module.exports = sequelize