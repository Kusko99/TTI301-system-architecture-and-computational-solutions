// //declarando constantes
// const nome = "Jose"
// const idade = 27

// //aspas simples e duplas têm o mesmo efeito
// const sexo = "M"
// const endereco = 'Rua K, 12'

// //declarando variáveis
// let a = 2
// let b = "abc"

// //var: seu escopo á a função em que foi declarada ou global
// var c = 2 + 3
// var d = "abcd"

// //não usar var
// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// //nome pode ser redeclarada
// var linguagem = "Java"
// console.log("Aprendendo, " + linguagem) 

// //escopo não restrito a bloco
// var idade = 18
// //exibe undefined. Ou seja, a variável já existe aqui, só não teve valor atribuído
// //Ela e içada - do inglês hoist - para fora do bloco if
// console.log(`Oi, ${nome}`)
// if (idade >= 18){
//     var nome = "João"
//     console.log(`Parabéns, ${nome}. Você pode dirigir`)
// }
// //ainda existe aqui
// console.log(`Até mais, ${nome}.`)

// //coerção
// const n1 = 2
// const n2 = '3'
// //coerção implícita de n1, concatenação acontece
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita, soma acontece
// const n4 = n1 + Number(n2)
// console.log(n4)

// //comparação
// console.log(1 == 1) //true
// console.log(1 == "1")//true
// console.log(1 === 1)//true
// console.log(1 === "1")//false
// console.log(true == 1)//true
// console.log(1 == [1])//true
// console.log(null == null)//true
// console.log(null == undefined)//true
// console.log([] == false)//true
// console.log([] == [])//false

// //vetores (CHAMA DE LISTA CABAÇO)
// v1 = []
// //podemos acessar qualquer posição, começando de zero
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"
// //aqui, v1 tem comprimento igual a 11
// console.log(v1.length)
// //inicializando na declaração
// v2 = [2, "abc", true]
// console.log(v2)
// //iterando
// for(let i = 0; i <v2.length; i++){
//     console.log(v2[i])
// }
// for(i in v2){
//     console.log(v2[i])
// }

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// const apenasComA = nomes.filter((n) => n.startsWith("A"))
// console.log(apenasComA)

// const res = nomes.map((nome)=>nome.charAt(0))
// console.log(res)

// const todosComecamComA = nomes.every((n) => n.startsWith("A"))
// console.log(todosComecamComA)

// const valores = [1,2,3,4]
// const soma = valores.reduce((ac,v) => ac+v)
// console.log(soma)

// //funções
// function hello(){
//     console.log('Oi')
// }
// hello()
// //cuidado, aqui redefinimos a função sem parâmetros
// function hello(nome){
//     console.log('Hello ' + nome)
// }
// hello('Pedro')

// function soma(a,b){
//     return a + b
// }

// const res = soma(2,3)
// console.log (res)

// //Funções anonimas atribuidas a variaveis
// const dobro = function(n){
//     return n * 2
// }
// const res = dobro(4)
// //valor padrão para o parâmetro
// const triplo = function (n=5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

// //Arrow Function
// const hello = () => console.log("Hello")
// hello()
// const dobro = (valor) => valor * 2
// console.log(dobro(10))
// const triplo = (valor) =>{
//     return valor * 3
// }
// console.log(triplo(10))
// const ehPar = (n) => {
//     n % 2 === 0
// }
// console.log(ehPar(10))

// //Uma função pode ser atribuída a uma variável
// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variável")
// }
// //e pode ser chamada assim
// umaFuncao()
// //f recebe uma função como parâmetro e, por isso é uma função de alta ordem
// //Por devolver uma função, g também é de alta ordem
// function f (funcao){
//     //chamado a função
//     //note como a tipagem dinâmica tem seu preço
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log("Fui criada por g")
//     }
//     return outraFuncao
// }
// //e g pode ser chamada assim
// const gResult = g()
// gResult()
// //e assim também
// g()()
// //outros testes
// //f chama g, que somente devolve uma função, Nada é exibido
// f(g)
// //f chama a função devolvida por g "Fui criada por g" é exibido
// f(g())
// //f tenta chamar o que a função criada por g devolve. Ela não devolve coisa alguma. Por isso um erro- somente em tempo de execução- acontece
// f(g()())

// //escopo interno e exerteno
// function f(){
//     let nome = 'João'
//     function g (){
//         console.log(nome)
//     }
//     g ()
// }
// f ()

// function ola(){
//     let nome =  'João'
//     return function(){
//         console.log('Olá' + nome)
//     }
// }
// let olaResult = ola()
// //Aqui a função ola já terminou
// //É de se esperar que a variavel nome não possa ser mais acessada
// //Mas por ser um clousre ela pode
// olaResult()

// //também vae com parâmetros
// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(saudacao + ', ' + nome)
//     }
// }

// let olaJoao = saudacoesFactory("Olá", "João")
// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont ++
//     function f2(){
//         console.log(cont)
//     }
//     return{f1,f2}
// }

// let eAgoraResult = eAgora()

// eAgoraResult.f1()
// eAgoraResult.f2()