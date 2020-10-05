const express = require('express');
const app = express();
app.use(express.json());
let generes = [
    {id: 1, name: 'Romance',},
    {id: 2, name: 'Action'},
    {id:3,name:'Thriller'}
    ]
app.get('/api/generes', (req, res) => {

    res.send(generes);
});
/*
=================
will start tomorrow
===================
app.post('/api/generes',((req, res) => {
    let genre={
        id:generes.length+1,
        name:req.body.name
    }
    generes.push(genre);
    res.send(generes);
}));
*/

app.use('/',((req, res) => {
    console.log('hi this is error page');
}))
app.listen(3000);
