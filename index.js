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

//adicionado no dia 08/02

const {eAdmin}= require('')

app.post('/cadastro/updatecadastro', (req,res)=>{//adicionando usuarios a tabela
    const nome= req.body.nome
    const login = req.body.login
    const senha= req.body.senha

    const sql= `INSERT INTO usuarios(nome, login, senha) values(${nome},${login},${senha})`

    conn.query(sql, (err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('login')
    })
})





//Fim do dia 08/02


conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))