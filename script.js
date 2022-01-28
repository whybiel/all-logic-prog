// IF/ELSE

//1 - Crie uma condição que exiba uma mensagem no console se estiver a noite, senão retorne no console que ainda não anoiteceu
let noite = false

if(noite==true){
    console.log("Está a noite")
}else{
    console.log("Não está a noite")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for comer lasanha E o molho for bolonhesa
let comida = "lasanha"
let molho = "bolonhesa"

if(comida == "lasanha" && molho== "bolonhesa"){
    console.log("Você está comendo lasanha e o molho é bolonhesa")
}else{
    console.log("Você não está comendo lasanha ou molho não é bolonhesa")
}
//3 - Criar uma condição que exiba uma mensagem no console se você estiver de férias OU estiver Sol

let ferias = false
let sol = true

if(ferias==true  || sol ==true){
    console.log("Você está de férias, ou está fazendo sol")
}else{
    console.log("Você não está de férias e não está sol")
}

// FOR/WHILE

//1 - Criar um loop que conte de 1 até 20 usando FOR que conte os números ímpares
for(let i=1;i<=20;i+=2){
    console.log(i)
}

//2 - Criar um loop que conte de 20 até 1 usando WHILE que conte os números pares
let i = 0
while(i<20){
    console.log(20-i)
    i=i+2

}

// FUNCTION

// crie uma função que receba comida como (parâmetro) e exiba no console

// crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e exiba no console
function perfil(person, city, fruit){
    console.log(`${person}, ${city}, ${fruit}`)
}

perfil(`Homem-Aranha`, `Rio de Janeiro`, `Maçã`)

// ARRAY

//--- Estrutura do ARRAY---
//variavel = [elementos,elementos,elementos]

let languages = ["python", "C", "JavaScript", "React", "English", "French"];
console.log(languages)
// Utilize um método para adicionar dois nomes ao fim do array.
languages.push("Gabriel", "Ivan")
console.log(languages)
// Utilize um método para remover o primeiro nome do array.
languages.shift()
console.log(languages)
// Utilize um método para organizar em ordem alfabética
languages.sort()
console.log(languages)


// OBJETOS

// Crie um array  chamado "pessoas" contendo ao menos 3 objetos.
let pessoas = [
    {
        nome: "",
        idade:"",
        altura:"",
        musica: ""
    },

    {
        nome:"",
        idade:"",
        altura:"",
        musica:""
    },
    {
        nome: "",
        idade: "",
        altura: "",
        musica: ""
    }
]
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  altura, musicas.
pessoas[0].nome = "Gabriel"
pessoas[0].idade = 17
pessoas[0].altura = 185
pessoas[0].musica = "Trap"


pessoas[1].nome = "Stefany"
pessoas[1].idade = 32
pessoas[1].altura = 185
pessoas[1].musica = "Rock"

pessoas[2].nome = "Mariana"
pessoas[2].idade = 18
pessoas[2].altura = 165
pessoas[2].musica = "POP"

console.log(pessoas)

//Na propriedade musicas, adicione ao menos 3 itens.
pessoas[0].musica = `Trap, funk e MPB`

pessoas[1].musica = `Gospel, rock e axé`

pessoas[2].musica = `Blue, classic e country`