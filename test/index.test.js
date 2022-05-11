// //testa o que está dentro do arquvio index
import { pegaArquivo } from '../index.js'

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function') //tipos primários
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/mnt/c/workspace/cursos/alura_node_lib/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult) //compara duas coisas se são iguais
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/mnt/c/workspace/cursos/alura_node_lib/test/arquivos/texto1_semlink.md')
        expect(resultado).toBe('não há links') //compara duas coisas se são iguais
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('/mnt/c/workspace/cursos/alura_node_lib/test/arquivos'))
            .rejects
            .toThrow(/não há arquivo no caminho/) //compara duas coisas se são iguais
    })
})

// describe('pegaArquivo::', () => {
//     it('deve ser uma função', () => {
//         expect(typeof pegaArquivo).toBe('function') //tipos primários
//     })
//     it('deve retornar array com resultados', () => {
//         pegaArquivo('./arquivos/texto1.md')
//             .then(resultado => {
//                 expect(resultado).toEqual(arrayResult) //compara duas coisas se são iguais
//             })
//     })
// })
