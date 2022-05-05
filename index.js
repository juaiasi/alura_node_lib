import chalk from 'chalk' //biblioteca que foi instalada com npm install
import fs from 'fs' //biblioteca nativa para acesso aos arquivos do sistema (files)

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//                                             //callback, o que mostra se der erro e se der sucess. como quero ignorar o primeiro parâmetro, coloco underscore
//     fs.readFile(caminhoDoArquivo, encoding, (_,texto)=>{
//         console.log(chalk.green(texto)) //pinta de verde
//     })
// }

function tratarErro(erro){
    // lança novo erro          //código do erro, mas não precisa do .code (mas abrevia)
    throw new Error(chalk.red(erro.code,'não há arquivo no caminho'))
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
                                            //callback, o que mostra se der erro e se der sucess.
    fs.readFile(caminhoDoArquivo, encoding, (erro,texto)=>{
        if(erro){
            tratarErro(erro);
        }
        console.log(chalk.green(texto)) //pinta de verde
    })
}


pegaArquivo('./arquivos/texto1.md')
