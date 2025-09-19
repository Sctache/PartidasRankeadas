//Objetivo: Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um
//jogador, depois disso retorne o resultado para uma variável. 

function games (vitorias, derrotas){

    //O saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
    let saldoInt = parseInt(vitorias - derrotas)
    return saldoInt
}


let saldo = games(10,3)
console.log(saldo)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

let nivel = ""

switch (nivel, saldo){
    case saldo <= 10: nivel = "Ferro"
    break

    case 11 <= saldo <= 20: console.log("Bronze")
    break

    case 21 <= saldo <= 50: console.log("Prata")
    break

    case 51 <= saldo <= 80: console.log("Ouro")
    break

    case 81 <= saldo <= 90: console.log("Diamante")
    break

    case 91 <= saldo <= 100: console.log("Lendário")
    break

    case saldo >= 101: console.log("Imortal")
}




//Saída: Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

console.log("O Heróis tem saldo de " + saldo + " vitórias, e está no nível de " + nivel)