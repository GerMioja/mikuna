const mysql_reserva = require('mysql');

//reserva de mesa

const connection_reserva = mysql_reserva.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reservar'
}) 

connection_reserva.connect((error) => {
    if(error){
        console.log('el error de la coneccion es: ' + error);
        return;
    }
    console.log('¡Conectdo a la base de datos de reserva de mesas');
});

module.exports = connection_reserva;