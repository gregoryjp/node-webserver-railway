const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res) =>{

// para mnadar informacion y descargar en fornato csv
// res.setHeader('content-disposition', 'attachment; filename=lista.csv');
// res.writeHead(200, {'content-type': 'application/csv'});


res.write('Hola Mundo');
res.end();

});

server.listen(8080);

console.log(`escuchando el porto ${8080} Activo`);


