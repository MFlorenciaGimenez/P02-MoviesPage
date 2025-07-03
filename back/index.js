const app = require('./src/server');

const dbCon = require('./src/config/dbCon')

console.log("iniciando conexion a mongo");

dbCon().then(
    res=>{
            app.listen(3000, (err) => {
    console.log("servidor escuchando en el puerto 3000");
    
    });

});