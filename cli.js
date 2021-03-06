#!/usr/bin/env node

import {pegaArquivo} from './index.js'
import {validaUrl} from './http-validacao.js'
// import chalk from 'chalk' //biblioteca que foi instalada com npm install

// comand line interface - imput de comandos
// apenas exibe as informações na interface
// porta de entrada em vez do index
const caminho = process.argv
//pega dois camonhos: o caminho do node e do arquivo atual
// importei a função e coloquei como argumento o terceiro caminho, que é inserido manualmente pelo usuário no command line
// dessa forma é possível usar: node cli.js ./arquivos/texto1.md

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2])
    if(caminhoDoArquivo[3] === 'validar'){
        console.log('Links validados',await validaUrl(resultado))
    } else{
    console.log('Lista de links',resultado)
    }
}

processaTexto(caminho)