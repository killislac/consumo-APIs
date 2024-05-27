function cadastroProduto(produto){


const  requisicao =  new Request('http://localhost:3000/produtos', { 
    'method': "POST",
    "headers": {
        'Content-Type': 'application/json'

    },
    "body": JSON.stringify(produto)
})

fetch(requisicao)
}