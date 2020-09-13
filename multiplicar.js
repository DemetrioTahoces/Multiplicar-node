// Requireds
const fs = require("fs");
//console.log(fs);
//const fs = require('express')
//const fs = require('./fs')

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de base '${base}' no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido de límite '${limite}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) data += `${base} * ${i} = ${base * i}\n`;

        resolve(data);
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de base '${base}' no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido de límite '${limite}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) data += `${base} * ${i} = ${base * i}\n`;

        fs.writeFile(`tablas/tabla-base-${base}-limite-${limite}.txt`, data, (err) => {

            if (err) reject(err);
            else resolve(`tabla-base-${base}-limite-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}