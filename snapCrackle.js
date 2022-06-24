function snapCrackle(maxValue) {

    let resultado = " "

    for (let i = 1; i <= maxValue; i++) {

        if ([i] % 2 == 1 && [i] % 5 == 0) {

            resultado += "SnapCrackle, "
        } else if ([i] % 2 == 1) {

            resultado += "Snap, "

        } else if ([i] % 5 == 0) {

            resultado += "Crackle, "

        } else {

            resultado += (`${[i]}, `)
        }

    }

    return resultado
}

function primeNumber(numero) {

    let resultado = true

    for (let i = 2; i < numero; i++) {

        if (numero % i == 0) {

            resultado = false

        }

    }
    return resultado
}

function snapCracklePrime(maxValue) {
  
    let resultado = " "

    for (let i = 1; i <= maxValue; i++) {

        const primoVerificacao = primeNumber(i)

        if ([i] % 2 == 1 && [i] % 5 == 0 && primoVerificacao == true) {

            resultado += "SnapCracklePrime, "

        } else if ([i] % 2 == 1 && [i] % 5 == 0 && primoVerificacao == false) {

            resultado += "SnapCrackle, "

        } else if ([i] == 1) {

            resultado += "Snap, "

        } else if ([i] % 2 == 1 && primoVerificacao == true) {

            resultado += "SnapPrime, "

        } else if ([i] % 2 == 1 && primoVerificacao == false) {

            resultado += "Snap, "

        } else if (primoVerificacao == true) {

            resultado += "Prime, "

        }else if ([i] % 5 == 0) {

            resultado += "Crackle, "

        } else {

            resultado += (`${[i]}, `)
        }

    }

    return resultado
}

console.log(snapCrackle(15))

console.log(snapCracklePrime(15))