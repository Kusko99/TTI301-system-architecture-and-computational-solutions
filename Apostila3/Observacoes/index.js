const express = require ('express')
const bodyParser = require('body-parser')
const {v4:uunidv4} = require('uuid')

const observacoesPorLembreteId = {}

const app = express()
app.use(bodyParser.json())

app.put('/lembretes/:id/observacoes', (req,res) =>{
    const idObs = uunidv4()
    const { texto } = req.body
    const observacoesDoLembrete =
        observacoesPorLembreteId[req.params.id] || []
    observacoesDoLembrete.push({ id: idObs, texto })
    observacoesPorLembreteId[req.params.id] =
        observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete)
})

app.get('/lembretes/:id/observacoes', (req,res) => {
    res.send(observacoesPorLembreteId[req.params.id] || [ ])
})

app.listen(5000, (() => {
    console.log('Lembretes. Porta 5000')
}))