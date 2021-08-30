const express = require('express');
const bodyParser = require("body-parser");
//const repositoryMifa = require("./routes/repositoryMifa");
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

app.use( require('./route'));




//nos creara un objeto vacio y el jsones para que entienda angular o reac
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/email'));

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



app.get("/productsBabysec",(req , res )=>{
    res.send(productsBaybysec);
});
app.get("/productsShampoo",(req , res )=>{
    res.send(productsShampoo);
});

app.get("/MifaBabysecFormula",(req , res )=>{
    res.send(productsBabyMiFa);
});
/*botiking*/ 


//--post--

app.post("/FormulaBoti", (req , res)=>{
    
    const idbs = req.body;
    const productsFormCopyBoti = productsFormulaBoti.map(p => ({...p}));


    idbs.forEach(id => {
        const productbf = productsFormCopyBoti.find( p => p.id === id );
        
        if(productbf.stock > 0 ){
            productbf.stock--;
        }else{
            throw("Sin stock formula");
        }
  
    });


    productsFormulaBoti = productsFormCopyBoti;

    res.send(productsFormulaBoti) 
   
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
    console.log('server on port 3000');
});
