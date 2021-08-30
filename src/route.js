const { Router } = require('express');
const routerMy = Router();

const conexion = require('./public/html/database/mysql')

//Inkafarma
routerMy.get('/productsFormula',(req,res) =>{
    conexion.query('SELECT * FROM inkafarmaformula' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});
routerMy.get('/MifaProductFormula',(req,res) =>{
    conexion.query('SELECT * FROM mifarmaformula' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});

module.exports = routerMy;

