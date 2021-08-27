const { Router } = require('express');
const routerMy = Router();

const conexion = require('./public/html/database/db_mifarma')


routerMy.get('/productsFormula',(req,res) =>{
    conexion.query('SELECT * FROM mifarma' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});


/*
routerMy.get('/productsFormula',(req,res) =>{
    conexion.query('SELECT * FROM baybylac3' , (error , result)=>{
        if(error){
            throw error ;
        }else{
            res.send(result);
        }
    });
});
*/

routerMy.post("/Formula", (req , res)=>{
    /*
    const ids = req.body;
    const productsFormCopy = productsFormula.map(p => ({...p}));*/
    
    conexion.query('UPDATE mifarma SET stock= stock-1 '+
     'WHERE id = 1' , (error,results)=>{
            if(error) throw error;
            console.log(results);
    });
});

module.exports = routerMy;





