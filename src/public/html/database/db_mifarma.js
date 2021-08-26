const mysql = require('mysql');

var conexion = mysql.createConnection({
    host : 'localhost',
    database:'producto_db',
    user:'anthony',
    password:'prueba',
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
});

async function read(){
  conexion.query('SELECT * FROM formulamifa' , function(error,results){
        if(error)
            throw error;
          const productsMifaf = results.map(p =>({...p})); 

          productsMifaf.map(row => {
                console.log(row);
          });
          

            return productsMifaf;        
    });
  
}

read();
module.exports = {
    read,
  };







