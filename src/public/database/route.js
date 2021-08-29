
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host : 'localhost',
    user:'anthony',
    paswword:'prueba',
    database:'mifarmaproductos'

});
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es : '+error);
        return;
    }
    console.log("Conexion correcta a mysql");
})
