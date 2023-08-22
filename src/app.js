const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/calculater/:num1/:num2',function (req,res){
    //const {num1,num2} = req.body
    const num1 = req.params.num1
    const num2 = req.params.num2
    const sum = num1*num2
    res.json({'total':sum})
    //res.send("ผลรวมทั้งหมด = "+sum)
})
app.post('/calculater',function(req,res){
    const {num1,num2}=req.body
    const sum = num1+num2
    res.json({"result":sum})
})
const port = 8081

app.listen(port,function(req,res){
    console.log("server running on "+port);
})