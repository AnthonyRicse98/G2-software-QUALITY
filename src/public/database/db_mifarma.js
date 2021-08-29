const { Router } = require('express');
const routerMy = Router();

const conexion = require('./route')


routerMy.get('/productsFormula',(req,res) =>{
    conexion.query('SELECT * FROM mifarma' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});



module.exports = routerMy;

