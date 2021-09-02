console.log("Bem vindo ao sistema!")
console.log("Insira a data do evento:")

//Para verificar a data de evento

var dataAtual = new Date ();
console.log("A data inserida é" + dataAtual)

const dataEvento =new Date ("09-10-2021")


if (dataAtual >= dataEvento) {
    console.log("A data deve ser posterior a data  atual!");
} else {
    console.log("Cadastro Permitido");
}

//Verificar idade dos participantes

let idadeDoParticipante = 18
const idadeMinimaExigida = 18

if (idadeDoParticipante < idadeMinimaExigida) {
    console.log("A idade minima é de 18 anos")
} else {
    console.log("Idade cadastrada")
}

//Quantidade de participantes

let listaDeParticipantes = ["Participante1", "Participante2", "Participante3", "Participante4"]
let listaDePalestrantes = ["Palestrante1", "Palestrante2", "Palestrante3"]

if (listaDeParticipantes.length + listaDePalestrantes.length <= 100) {
    console.log("Cadastro concluido!")
} else { 
    console.log("O limite excede 100")
}