// Variaveis, cadastro de eventos

let hoje = new Date().toDateString()
let dataEvento = new Date('30/12/2021').toDateString()

console.log(hoje)

if (dataEvento < hoje) {
  console.log('Data do evento posterior a atual, cadastro  permitido!')
} else {
  console.log('Data do evento inferior a atual, cadastro não permitido!')
}

let idadeParticipante = 20

if (idadeParticipante >=18) {
  console.log("idade permitida para participar do evento, continuar cadastro!")
} else {
  console.log("Participante menor de idade, cadastro não permitido")
}

let listarparticipantes = ['']

console.log(listarparticipantes.length)

let listarpalestrantes = ['']

console.log(listarpalestrantes.length)

let numeroParticipantes = 102
if (numeroParticipantes <= 100) {
    console . log("cadastro permitido, continuar cadastro")
} else {
   console . log("Número de participantes maior que 100, cadastro não permitido") 
}
