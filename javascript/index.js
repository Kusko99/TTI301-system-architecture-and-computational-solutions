// function hello(){
//     console.log('OI, EU SOU O GOKU!!!')
// }
 
// hello()

// function hello (nome){
//     console.log('Olá, ' + nome)
// }

// hello('RAUL!!!!!')

// function soma(a,b){
//     return a + b
// }

// const res = soma(2,3)
// console.log(res)

// const dobro = function (n) {
//     return n * 2
// }
// const res = dobro(4)
// console.log(res)

// const triplo = function (n=5){
//     return n * 3
// }
// console.log(triplo(10))
// console.log(triplo())


const hello = () => console.log("Hello")
hello()

const dobro = (valor) => valor * 2
console.log(dobro(10))

const triplo = (valor) => {
    valor * 3
}
console.log(triplo(10))

const ehPar = (n) => {
    res = n%2
    if (res == 0){
        return true
    }else{
        return false
    }
}
console.log(ehPar(10))

let umaFuncao = function (){
    console.log('Foi armazenada em uma variavel')
}

function f (funcao){
    funcao()
}

f(umaFuncao)

function g(){
    function outraFuncao(){
        console.log('Estou sendo passada para f')
    }  
    return outraFuncao  
}

const gResult = g()
console.log(gResult)
gResult()

g()()

f(g())
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const apenasComA = nomes.filter((n => n.startsWith('A')))
// console.log(apenasComA)

// const res = nomes.map((nome) => nome.charAt(0))
// console.log(res)

// const todosComecaComA = nomes.every((n => n.startsWith('A')))
// console.log(todosComecaComA)

// const valores = [1,2,3,4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// console.log(`Soma ${soma}`)

// const v = [1, 2, 3]
// console.log(v)
// v.push(4)
// // v = [1, 2, 3]
// console.log(v)

// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = "abc"
// console.log(v1.length)
// v2 = [2, "abc", true]
// console.log(v2)
// for (let i = 0; i < v2.length; i++)
//   console.log(v2[i])
// //comparação == e ===
// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log(1 === "1")
// console.log(true == 1)
// //[1]
// console.log (1 == [1])
// // const j = undefined
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

// //hoist: içamento
// //mecanismo de dupla passagem do js
// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//   let nome = "João"
//   console.log(`Parabéns, ${nome}. Você pode dirigir`)
// }
// console.log("Até, " + nome)


// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)

// //const, let e var
// //use const para aplicar o princípio do menor privilégio
// const nome = "Luiz"
// console.log(nome)
// // nome = "João"
// let a = 2
// console.log(a)
// console.log(typeof(a))
// a = "João"
// console.log(a)
// console.log(typeof(a))
// var b = "oi"
// b = "tchau"
