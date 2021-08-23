const express = require('express');
const bodyParser = require("body-parser");
const repositoryInkaF = require("./routes/repositoryInka");
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());



//nos creara un objeto vacio y el jsones para que entienda angular o reac
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/email'));
//hola mundo
let productsFormula =
[
    {
        id : 1.1,
        name : "Babysec Super",
        price : 47.90 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 8,
    },
    {
        id : 1.2,
        name : "Babysec premiun",
        price : 47.90 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 3
    },
    {
        id : 1.3,
        name : "Babysec super",
        price : 48.90 , 
        image: "images/FormulaLactea/Baybylac3.jpg",
        stock :5
    },
];
let productsBaybysec =
[
    {
        id : 2.1,
        name : "Babysec Super",
        price : 43.50 , 
        image: "images/Babysec/BabysecXXGblue.jpg",
        stock : 3,
    },
    {
        id : 2.2,
        name : "Babysec premiun",
        price : 42 , 
        image: "images/Babysec/BabysecXGpurple.jpg",
        stock : 3
    },
    {
        id : 2.3,
        name : "Babysec super",
        price : 43 , 
        image: "images/Babysec/BabysecXGPblue.jpg",
        stock :5
    },
];
let productsShampoo =
[
    {
        id : 3.1,
        name : "savital colageno",
        price : 12.50 , 
        image: "images/Shampoo/SavitalColageno.jpg",
        stock : 5
    },
    {
        id : 3.2,
        name : "savital anticaspa",
        price : 12.50 , 
        image: "images/Shampoo/SavitalAnticaspa.jpg",
        stock : 3
    },
    {
        id : 3.3,
        name : "H&S proteccion caida",
        price : 30 , 
        image: "images/Shampoo/H&SProteccion.jpg",
        stock : 3
    },
];
let productsFormulaMiFa =
[
    {
        id : 1,
        name : "Babysec SuperMifa",
        price : 47.90 , 
        image: "images/FormulaLactea/Baybylac1Pro.jpg",
        stock : 3,
    },
    {
        id : 2,
        name : "Babysec premiun",
        price : 47.90 , 
        image: "images/FormulaLactea/Baybylac2.jpg",
        stock : 3
    },
    {
        id : 3,
        name : "Babysec super",
        price : 43.90 , 
        image: "images/FormulaLactea/Baybylac3.jpg",
        stock :5
    },
]; 
let productsBabyMiFa =
[
    {
        id : 1.21,
        name : "Babysec Super",
        price : 40.50 , 
        image: "images/Babysec/BabysecXXGblue.jpg",
        stock : 5,
    },
    {
        id : 1.22,
        name : "Babysec premiun",
        price : 46 , 
        image: "images/Babysec/BabysecXGpurple.jpg",
        stock : 3
    },
    {
        id : 1.23,
        name : "Babysec super",
        price : 46 , 
        image: "images/Babysec/BabysecXGPblue.jpg",
        stock :5
    },
];
//--get--
/*
app.get("/productsFormula", async (req , res )=>{
    res.send(await repositoryInkaF.read());
});*/
app.get("/productsFormula",(req , res )=>{
    res.send(productsFormula);
});
app.get("/productsBabysec",(req , res )=>{
    res.send(productsBaybysec);
});
app.get("/productsShampoo",(req , res )=>{
    res.send(productsShampoo);
});


/*Mifa*/
app.get("/MifaProductFormula",(req , res )=>{
    res.send(productsFormulaMiFa);
});
app.get("/MifaBabysecFormula",(req , res )=>{
    res.send(productsBabyMiFa);
});
//--post--

app.post("/Babysec", (req , res)=>{

    const idsb = req.body;
   const productsBabyCopy = productsBaybysec.map(p => ({...p}));

    idsb.forEach(id => {
        const productb = productsBabyCopy.find( p => p.id === id );
        if(productb.stock>0){
            productb.stock--;
        }else{
            throw("Sin stock babysec");
        }
        
    });
    productsBaybysec = productsBabyCopy;
  
    res.send(productsBaybysec)
});

app.post("/Formula", (req , res)=>{
    
    const ids = req.body;
    const productsFormCopy = productsFormula.map(p => ({...p}));


    ids.forEach(id => {
        const productf = productsFormCopy.find( p => p.id === id );
        
        if(productf.stock > 0 ){
            productf.stock--;
        }else{
            throw("Sin stock Shampoo");
        }
  
    });


    productsFormula = productsFormCopy;

    res.send(productsFormula) 
   
});

app.post("/Shampoo", (req , res)=>{
    
    const idsS = req.body;
    const productsSampCopy = productsShampoo.map(p => ({...p}));


    idsS.forEach(id => {
        const productS = productsSampCopy.find( p => p.id === id );
        
        if(productS.stock > 0 ){
            productS.stock--;
        }else{
            throw("Sin stock Shampoo");
        }
  
    });


    productsShampoo = productsSampCopy;

    res.send(productsShampoo) 
   
});

//--Nuevo--
/*Mi Farma*/
app.post("/FormulaMifa", (req , res)=>{
    
    const idms = req.body;
    const productsFormCopyMifa = productsFormulaMiFa.map(p => ({...p}));


    idms.forEach(id => {
        const productmf = productsFormCopyMifa.find( p => p.id === id );
        
        if(productmf.stock > 0 ){
            productmf.stock--;
        }else{
            throw("Sin stock Shampoo");
        }
  
    });


    productsFormulaMiFa = productsFormCopyMifa;

    res.send(productsFormulaMiFa) 
   
});
app.post("/BabysecMifa", (req , res)=>{
    
    const idmb = req.body;
    const productsBabyCopyMifa = productsBabyMiFa.map(p => ({...p}));


    idmb.forEach(id => {
        const productmb = productsBabyCopyMifa.find( p => p.id === id );
        
        if(productmb.stock > 0 ){
            productmb.stock--;
        }else{
            throw("Sin stock Shampoo");
        }
  
    });


    productsBabyMiFa = productsBabyCopyMifa;

    res.send(productsBabyMiFa) 
   
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
    console.log('server on port 3000');
});
