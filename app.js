require('dotenv').config();
const express = require("express");
var hbs = require('hbs');
const app = express();



// handlebars)
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res) => {
    res.render('home',{
        nombre: 'Gregory Peñaloza',
        titulo: 'Curso de Nodejs'
    });
  });


//servir contenido estaticos
app.use(express.static("public"));

app.get("/generic", (req, res) => {
    res.render('generic',{
        nombre: 'Gregory Peñaloza',
        titulo: 'Curso De Nodejs'
    }); 
});


app.get("/elements", (req, res) => {
    res.render('elements',{
        nombre: 'Gregory Peñaloza',
        titulo: 'Curso De Nodejs'
    });
});

app.get("*", (req, res) => {
    res.render('*',{
        nombre: 'Gregory Peñaloza',
        titulo: 'Curso De Nodejs'
    });
});

app.listen(process.env.PORT);

console.log(`listening through the port ${process.env.PORT} `);
