const express = require ('express')
const {engine}= require ('express-handlebars')

const app = express()

const conn = require('./db/conn')

const usuarios = require('./models/Users')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json())

app.get('usuarios',(req,res)=>{
    res.render('/')
})


conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))