import exp from 'express'

const Port = 2909;

const app = exp()

app.set("view engine","ejs")

let arr = []

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(Port);