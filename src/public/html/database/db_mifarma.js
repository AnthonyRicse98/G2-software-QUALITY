const mysql = require('mysql');

var conexion = mysql.createConnection({
    host : 'localhost',
    database:'mifarmaproductos',
    user:'botikingMifa',
    password:'prueba',
});

/*
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
});
let cat;*/
/*
async function read(){
    
 conexion.query('SELECT id, nombre , precio , image , stock FROM formulamifa   '  ,  function (error,results){
            if(error){
                throw error;
            }else{
                const rows = results.map(p =>({...p})); 
               cat = rows;
                
            }
           
           
            console.log(cat);   
            return cat;   
        });     
    }

    
  read();

module.exports = {
    read,
}


*/

conexion.connect((error)=>{
    if(error){
        console.log('error de conexion : ' + error);
        return
    }
    console.log('!Conectado a la Bd MYsQL');
})

module.exports = conexion ; 




