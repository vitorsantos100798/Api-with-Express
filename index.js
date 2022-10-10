const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())

app.listen(8080, () =>{
    console.log('Servidor no Ar')
})

const db = [
    { '1':    {nome:'vitor',idade:12} },
    { '2':    {nome:'Chico',idade:13} },
    { '3':    {nome:'Maria',idade:14} },
    { '4':    {nome:'joão',idade:15} },
    { '5':    {nome:'Vitoria',idade:18}},
]

app.get('/',(req,res)=>{
    return res.json(db)
})

app.post('/add',(req,res)=>{
    const body = req.body
    
    if(!body)
    return res.status(400).end()
    
    db.push(body)
    return res.json(body)
})



