const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");
const argv = require("./config/yargs").argv;
const colors = require("colors");

//console.log(crearArchivo);

//console.log(process.argv);

// let parametro = argv[2];
// let base = parametro.split("=")[1];

// console.log(argv.base);
// console.log(argv.limite);

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
      .then((lista) => console.log(lista))
      .catch((err) => console.log("Error: ", err));
    break;

  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo}`))
      .catch((err) => console.log("err", err));
    break;

  default:
    console.log("Comando no reconocido");
}
