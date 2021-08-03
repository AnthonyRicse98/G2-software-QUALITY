const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//nos creara un objeto vacio y el jsones para que entienda angular o react
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/email'));
//hola mundo
const productsFormula =
[
    {
        id : 1,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 50 
    },
    {
        id : 2,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 50 
    },
    {
        id : 3,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 50 
    },
];

const productsBaybysec =
[
    {
        id : 1,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac3Pro.jpg",
        stock : 50 
    },
    {
        id : 2,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac3Pro.jpg",
        stock : 50 
    },
    {
        id : 3,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac3Pro.jpg",
        stock : 50 
    },
];
const productsShampoo =
[
    {
        id : 1,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 50 
    },
    {
        id : 2,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 50 
    },
    {
        id : 3,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 50 
    },
];
//--api get---
app.get("/productsFormula",(req , res )=>{
    res.send(productsFormula);
});

app.get("/productsBabysec",(req , res )=>{
    res.send(productsBaybysec);
});
app.get("/productsShampoo",(req , res )=>{
    res.send(productsShampoo);
});

//--api post--
app.post("/productsPayFormula", (req , res) => {
    console.log(req.body);
    res.send(productsFormula);
});




app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
    console.log('server on port 3000');
});