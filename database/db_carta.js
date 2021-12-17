const mysql_carta = require('mysql');//invocaoms a mysql 

//reserva de mesa

const connection_carta = mysql_carta.createConnection({//creamos la coneccion 
    host: 'localhost',//ase referencia en donde esta ejecutandose el programa
    user: 'root',//es el usuario del localhost
    password: '',//password del localhost
    database: 'carta'//el nombre de la base de datos 
}) 

connection_carta.connect((error) => {//hacemos una funcion para saber si la base de datos esta conectada o no
    if(error){
        console.log('el error de la coneccion es: ' + error);
        return;
    }
    console.log('¡Conectdo a la base de datos de carta');
});

module.exports = connection_carta;//exportamos el modulo, para poder usarlo en el proyyecto