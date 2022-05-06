import chalk from 'chalk' //biblioteca que foi instalada com npm install
import fs from 'fs' //biblioteca nativa para acesso aos arquivos do sistema (files)

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//                                             //callback, o que mostra se der erro e se der sucess. como quero ignorar o primeiro parâmetro, coloco underscore
//     fs.readFile(caminhoDoArquivo, encoding, (_,texto)=>{
//         console.log(chalk.green(texto)) //pinta de verde
//     })
// }

const texto = 'A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extraiLink(texto){
    const regex = /\[([^\]]*)\]\((http[^\)]*)\)/gm
    // const linksExtraidos = texto.match(regex) //método match é um método de string, não remove os colchetes
    // const linksExtraidos = regex.exec(texto) //só trás uma
    const arrayResultados = {}
    let temp

    while((temp = regex.exec(texto)) !== null){
        arrayResultados[temp[1]] = temp[2]
    }

    console.log(arrayResultados)
}

function tratarErro(erro){
    // lança novo erro          //código do erro, mas não precisa do .code (mas abrevia)
    throw new Error(chalk.red(erro.code,'não há arquivo no caminho'))
}

// construindo a função de froma assincrona usando then
async function pegaArquivo(caminhoDoArquivo){ //async
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding) //await
        console.log(extraiLink(texto))
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
