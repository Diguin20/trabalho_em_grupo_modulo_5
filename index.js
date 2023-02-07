const express = require ('express')
const {engine}= require ('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Users = require('./models/Users')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json())

app.get('/',(req,res)=>{
    res.render('login')
})

app.get('/financial_dashboard/create', function (req, res) {
    res.render('cadastro')
})
app.get('/financial_dashboard/:id/dashboard', function(req, res) {
    res.render('home')
})


conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))