const express = require('express')
const cors= require('cors')

const app = express()
const port= 3000
let pqrArray=[]

app.use(
    express.urlencoded({
        extended:true
    }))

app.use(express.json({
    type: "*/*"
}))

app.use(cors())

app.get('/transaction',(req, res) =>{
    res.send(JSON.stringify(pqrArray))
})
app.post('/transaction',(req, res) =>{
    let pqr=req.body;
    pqrArray.push(pqr)
    res.send(JSON.stringify("PQR guardada"))
    console.log(pqrArray)
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