const express = require('express')
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.set('view engine','ejs')
app.set('views',path.resolve('views'))
app.get('/',(req,res)=>{
    res.send('Server')
})

app.listen(port,()=>{
    console.log(`server started at port${port}`)
})