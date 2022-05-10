import fetch from "node-fetch";

function manejaErro(erro){
   throw new Error(erro.message)
}

async function checarSatus(arrayURLs){
    try {
        const arrayStatus = await Promise
        .all(arrayURLs
        .map(async url=>{ //promisse all espera várias requisições, precisa ser async
            const res = await fetch(url)
            return `${res.status} - ${res.statusText}`
        }))
        return arrayStatus
    }
    catch(erro){
        manejaErro(erro)
    }
}

function geraArrayDeUrls(arrayLinks){
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

export async function validaUrl(arrayLinks){ //como recebeu async, precisa ser async
    const links = geraArrayDeUrls(arrayLinks)
    const statusLinks = await checarSatus(links)
    const resultados = arrayLinks.map((objeto,indice) => (
        //spread operator - espalha o valor do objeto, abre e conseguimos incluir coisas dentro
        //arraw function inverte o parenteses com chaves quando se trata de um objeto
        {...objeto, status:statusLinks[indice]})
    )
    return resultados;
}