const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'botiking',
    user: 'anthony',
    password: 'prueba',
});


conexion.connect((error) => {
    if (error) {
        console.log('error de conexion : ' + error);
        return
    }
    console.log('!Conectado a la Bd MYsQL');
})

module.exports = conexion;



