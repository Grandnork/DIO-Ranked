function eloCalculator(wins, loses){
    let winRatio = wins - loses
    if (winRatio <= 0){
        return console.log("O Herói não tem vitorias e continua sem classificação.")
    }
    else if (winRatio <= 10){
        return console.log("O Herói tem " + winRatio + " vitorias e está no elo Ferro.")
    }
    else if (winRatio <= 20){
        return console.log("O Herói tem " + winRatio + " vitorias e está no elo Bronze.")
    }
    else if (winRatio <= 50){
        return console.log("O Herói tem " + winRatio + " vitorias e está no elo Prata.")
    }
    else if (winRatio <= 80){
        return console.log("O Herói tem " + winRatio + " vitorias e está no elo Ouro.")
    }
    else if (winRatio <= 90){
        return console.log("O Herói tem " + winRatio + " vitorias e está no elo Diamante.")
    }
    else if (winRatio <= 100){
        return console.log("O Herói tem " + winRatio + " vitorias e está no elo Lendário.")
    }
    else if (winRatio > 100){
        return console.log("O Herói tem " + winRatio + " vitorias e está no elo Imortal.")
    }
}
