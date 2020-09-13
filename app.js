/**
 * app
 */

const { crearArchivo, listarTabla } = require('./multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

//console.log(crearArchivo)

//console.log(process.argv)

//let argv = process.argv;

//console.log(argv);

let comando = argv._[0];

//console.log(comando);

//let parametro = argv[2];

//let base = parametro.split("=")[1]

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => {
                console.log('======================='.green);
                console.log(`      Tabla del ${argv.base}`.green);
                console.log('======================='.green);
                console.log(tabla);
            })
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}