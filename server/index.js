const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')


const app=express()

app.use(cors())
app.use(express.json())
const client =new MongoClient('mongodb+srv://admin_2004:admin_2004@cluster0.nk5ieqx.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling1')
const col = db.collection('register')
col.insertOne({'student':"123"})

app.post('/register', (req, res)=>{
col.insertOne(req.body)
res.send('Inserted succesfully')
})


app.get('/retrieve',async(req, res)=>{
    const result= await col.find().toArray()
    console.log(result)
    res.send(result)
})


app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.listen('8080', ()=>{
            console.log('server is running')})
