// //EXECUÇÃO SÍNCRONA E ASSÍNCRONA

// //Modelo Single Threaded

// console.log('Eu primeiro')
// console.log("Agora eu")
// console.log("Sempre vou ser a última")

// const a = 2 + 7
// const b = 5
// //só faz sentido se os valores a e b já estiverem disponíveis
// console.log(a + b)

// function demorada(){
//     const atualMais25segundos = new Date().getTime + 2000
//     while(new Date().getTime() <= atualMais25segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// console.log(d)
// // o valor de e não depende do valor devolvido pela função demorada
// // modelo de execução síncrono ou bloqueante
// const e = 2 + a + b
// console.log(e)

// //Modelo assíncrono ou não bloqueante
// function demorada(){
//     const atualMais25segundos = new Date().getTime + 2000
//     while(new Date().getTime() <= atualMais25segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //função será executada depois de, pelo menos 500 milisegundos
// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// },500)

// //enquanto isso, essas linhas prosseguem executando
// //sem ficar esperando
// const e = a + b
// console.log(e)

// const fs = require("fs")
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function (erro,conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }else{
//             console.log(conteudo.toString())
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo("arquivo.txt")

// const fs = require("fs")
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }else{
//             console.log(conteudo.toString())
//             const dobro = + conteudo.toString() * 2
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log("Deu erro tentando salvar o dobro")
//                 }
//                 else{
//                     console.log("Salvou o dobro com sucesso")
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo("arquivo.txt")

// function calculoDemorado(numero){
//     return new Promise(function(resolve, reject){
//         let res = 0
//         for (let i = 1; i <= numero; i++){
//             res += 1
//         }
//         resolve(res)
//     })
// }
// calculoDemorado(10).then((resultado) => {
//     console.log(resultado)
// })

// function calculoRapidinho(numero){
//     return Promise.resolve((numero * (numero + 1))/2)
// }
// calculoRapidinho(10).then(resultado =>{
//     console.log(resultado)
// })
// .catch((err)=>{
//     console.log(err)
// })
// calculoRapidinho(-1)
// .then((resultado) =>{
//     console.log(resultado)
// })
// .catch((err)=>{
//     console.log(err)
// })
// //Executa primeiro, mesmo que a promise já esteja fullfilled
// console.log('Esperando...')

// async function hello(nome) {
//     return "Oi, " + nome
// }
// const boasVindas = hello("João")
// console.log(boasVindas)
// boasVindas.then((res) => console.log(res))

function fatorial(n){
    if (n<0) return Promise.reject("Valor não pode ser negativo")
    let res = 1
    for (let i = 2; i <= n; i++) res *= 1
    return Promise.resolve(res)
}

// function chamadaComThenCatch(){
//     fatorial(5)
//         .then((res) => console.log(res))
//         .catch((res) => console.log(res))
    
//     fatorial(-1)
//         .then((res) => console.log(res))
//         .catch((res) => console.log(res))
// }
// chamadaComThenCatch()

async function chamadaComAwait() {
    // note que não há paralelismo implícito
    // somente haverá paralelismo se a função chamada utilizar explicitamente

    const f1 = await fatorial(5);
    console.log(f1);

    try {
        const f2 = await fatorial(-1); // Como o valor é negativo, cairá no catch
        console.log(f2);
    } catch (error) {
        console.log(error); // Irá exibir o erro
    }
}

// Chamando a função para garantir que o código seja executado
chamadaComAwait();
