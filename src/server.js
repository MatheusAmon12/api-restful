const express = require('express')
//const path = require('path')

//const db = require('./database')
const routes = require('./routes/routes')

const app = express()

//conexão com o db
//db.connect()

//habilitando server para recebimento de dados via post formulário
app.use(express.urlencoded({extended: true}))

//definindo rotas
app.use('/api', routes)

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))