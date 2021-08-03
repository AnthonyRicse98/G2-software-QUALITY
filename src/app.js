const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

//nos creara un objeto vacio y el jsones para que entienda angular o reac
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/email'));
//hola mundo
const productsFormula =
[
    {
        id : 1.1,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 3
    },
    {
        id : 1.2,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 50 
    },
    {
        id : 1.33,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 50 
    },
];

const productsBaybysec =
[
    {
        id : 2.1,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac3Pro.jpg",
        stock : 8,
    },
    {
        id : 2.2,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac3Pro.jpg",
        stock : 50 
    },
    {
        id : 2.3,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac3Pro.jpg",
        stock : 50 
    },
];
const productsShampoo =
[
    {
        id : 3.1,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 5
    },
    {
        id : 3.2,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 50 
    },
    {
        id : 3.3,
        name : "name",
        price : 30 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 50 
    },
];

//--get--
app.get("/productsFormula",(req , res )=>{
    res.send(productsFormula);
});

app.get("/productsBabysec",(req , res )=>{
    res.send(productsBaybysec);
});
app.get("/productsShampoo",(req , res )=>{
    res.send(productsShampoo);
});

//--post--

app.post("/Babysec", (req , res)=>{

    const idsb = req.body;
   

    idsb.forEach(id => {
        const productb = productsBaybysec.find( p => p.id === id );
        productb.stock--;
    })
  
  
    res.send(productsBaybysec)
});
app.post("/Formula", (req , res)=>{

   
    const ids = req.body;

    ids.forEach(id => {
        const productf = productsFormula.find( p => p.id === id );
        productf.stock--;
    })
    res.send(productsFormula) 
   
});
app.post("/Shampoo", (req , res)=>{

   
    const idsS = req.body;

    idsS.forEach(id => {
        const productS = productsShampoo.find( p => p.id === id );
        productS.stock--;
    })
    res.send(productsShampoo) 
   
});






app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
    console.log('server on port 3000');
});