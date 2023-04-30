const express = require('express')
const cors= require('cors')

const app = express()
const port= 3000

app.use(
    express.urlencoded({
        extended:true
    }))

app.use(express.json({
    type: "*/*"
}))

app.use(cors())

app.get('/transaction',(req, res) =>{
    res.send("Se recibio un get")
})
app.post('/transaction',(req, res) =>{
    res.send("Se recibe un post")
})

app.delete('/prueba',(req, res) =>{
    res.send("Se recibe un delete  ")
})

app.put('/prueba',(req, res) =>{
    res.send("Se recibe un put  ")
})


app.listen(port,()=>{
    console.log(`Estoy ejecutandome en http:localhost:${port}`)
})