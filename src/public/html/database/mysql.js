const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: '35.243.134.30',
    database: 'botiking',
    user: 'root',
    password: 'prueba123',
    
});
//bag0tTH6FqeHCWq7

conexion.connect((error) => {
    if (error) {
        console.log('error de conexion : ' + error);
        return
    }
    console.log('!Conectado a la Bd MYsQL');
})

module.exports = conexion;



