//Objetivo: Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um
//jogador, depois disso retorne o resultado para uma variável. 

function games (vitorias, derrotas){

    //O saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
    let saldoInt = parseInt(vitorias - derrotas)
    return saldoInt
}


let saldo = games(200, 50)
console.log(saldo)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

let nivel = ""

//Lembre-se: Switch é uma expressão booleana, somente aceitando, portanto, 'True or False'.
switch (true){
    case saldo <= 10: nivel = "Ferro"
    break

    case saldo <= 20: nivel = "Bronze";
    break

    case saldo <= 50: nivel = "Prata";
    break

    case saldo <= 80: nivel = "Ouro";
    break

    case saldo <= 90: nivel = "Diamante";
    break

    case saldo <= 100: nivel = "Lendário";
    break

    case saldo >= 101: nivel = "Imortal";
}




//Saída: Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

console.log("O Herói tem saldo de " + saldo + " vitórias, e está no nível de " + nivel)