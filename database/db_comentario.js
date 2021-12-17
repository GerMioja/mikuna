const mysql_comentario = require('mysql');

//reserva de mesa

const connection_comentario = mysql_comentario.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comentarios'
}) 

connection_comentario.connect((error) => {
    if(error){
        console.log('el error de la coneccion es: ' + error);
        return;
    }
    console.log('¡Conectdo a la base de datos de comentario');
});

module.exports = connection_comentario;