const express = require('express')
const uplodRoute = require('./uplodController')
const app = express();
const path = require('path')
const port = 3000;
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.set('view engine','ejs')
app.set('views',path.resolve('views'))
app.get('/',(req,res)=>{
    res.render('file')
})
app.use('/upload',uplodRoute)


app.listen(port,()=>{
    console.log(`server started at port${port}`)
})