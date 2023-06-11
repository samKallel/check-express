const express = require ('express');
const app = express();
const fs = require('fs');
const port=3500;
const v = require('./verif.js');
app.use(express.static('public'));

app.get('/', v , (req,res)=>{
    fs.readFile('./public/Home.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});
app.get('/Home', v , (req,res)=>{
    fs.readFile('./public/Home.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});
app.get('/Services', v , (req,res)=>{
    fs.readFile('./public/Services.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});

app.get('/Contact', v , (req,res)=>{
    fs.readFile('./public/Contact.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});

app.listen(port, ()=>console.log(`Serveur runnig on: http://localhost:${port}`));