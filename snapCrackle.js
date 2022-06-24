function snapCrackle(maxValue) {

    let resultado = " "

    for (let i = 1; i <= maxValue; i++) {


        if ([i] % 2 == 1) {

            resultado += "Snap, "

        } else if ([i] % 5 == 0) {
            resultado += "Crackle, "

        } else if ([i] % 5 == 0 && [i] % 2 == 1) {
            resultado += "SnapCrackle, "

        } else {
            resultado += (`${[i]}, `)

        }

    }

    return resultado
}

console.log(snapCrackle(12))