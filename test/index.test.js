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
