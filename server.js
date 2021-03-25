const express = require('express')
const nunjucks = require('nunjucks')
const swal = require('sweetalert')
const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache: true
})


server.get("/", (req, res) => {
    return res.render('index.html')
})

server.get("/sobre", (req, res) => {
    return res.render('localizacao.html')
})

server.get("/especialidades", (req, res) => {
    return res.render('especialidade.html')
})

server.get("/mater", (req, res) => {
    return res.render('planomater.html')
})

server.get("/trabalhe-conosco", (req, res) => {
    return res.render('trabalhe-conosco.html')
})


server.listen(3000, () => {
    console.log("ok, rodando")
})