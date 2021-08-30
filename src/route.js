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
routerMy.get('/productsBabysec',(req,res) =>{
    conexion.query('SELECT * FROM inkafarmababysec' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});

//mifarma
routerMy.get('/MifaProductFormula',(req,res) =>{
    conexion.query('SELECT * FROM mifarmaformula' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});
routerMy.get('/MifaBabysecFormula',(req,res) =>{
    conexion.query('SELECT * FROM mifarmababysec' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});

module.exports = routerMy;

