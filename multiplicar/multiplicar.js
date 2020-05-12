//Requireds
const fs = require("fs");

let data = "";

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject(`Comprueba que ${base} y ${limite} sean numeros.`);
    }

    for (let i = 1; i <= limite; i++) {
      let res = base * i;

      data += ` ${base} * ${i} = ${res} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) throw reject(err);
      resolve(`tabla-${base}.txt`);
    });
  });
};

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject(`Comprueba que ${base} y ${limite} sean numeros.`);
    }

    for (let i = 1; i <= limite; i++) {
      let res = base * i;

      data += ` ${base} * ${i} = ${res} \n`;
    }

    resolve(data);
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
