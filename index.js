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

// construindo a função de froma assincrona usando then
async function pegaArquivo(caminhoDoArquivo){ //async
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding) //await
        console.table(chalk.green(texto))
    } 
    catch(erro){
        tratarErro(erro)
    }
    
}

// // construindo a função de froma assincrona usando then
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     //asincrono: espera processar para fazer, enquanto isso faz outras coisas
//     //os que estão com pondo podem ser tudo na mesma linha, mas devem estar na ordem
//     //fs já permite promises
//     fs.promises
//     .readFile()
//     .then((texto) => console.table(chalk.blue(texto)))
//     .catch((erro) => tratarErro()) //caso dê erro
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//                                             //callback, o que mostra se der erro e se der sucess.
//     fs.readFile(caminhoDoArquivo, encoding, (erro,texto)=>{
//         if(erro){
//             tratarErro(erro);
//         }
//         console.log(chalk.green(texto)) //pinta de verde
//     })
// }


pegaArquivo('./arquivos/texto1.md')
