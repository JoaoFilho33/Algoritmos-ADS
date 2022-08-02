import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const decimal = input('Decimal: ').split('').map(Number)

    let romano = verificar_pos_decimal(decimal)

    console.log(romano.join(''))

}

function verificar_pos_decimal(numero) {
    let valor = new Array()

    if (numero.length === 3) {
        if (numero[2] <= 10) {
            valor[2] = converter_unidade(numero[2])
        }
        if (numero[1] < 10) {
            valor[1] = converter_dezena(numero[1])
        }
        if (numero[0] < 10) {
            valor[0] = converter_centena(numero[0])
        }
    }
    else if (numero.length === 2) {
        if (numero[1] < 10) {
            valor[1] = converter_unidade(numero[1])
        }
        if (numero[0] < 10) {
            valor[0] = converter_dezena(numero[0])
        }
    }
    else {
        valor[0] = converter_unidade(numero[0])
    }

    return valor

}

function converter_unidade(numero) {
    let count = 0
    while (numero > count) {
        count++
    }
    return converter_count_unidade(count)
}

function converter_dezena(numero) {
    let count = 0
    while (numero > count) {
        count++
    }
    return converter_count_dezena(count)
}   

function converter_centena(numero) {
    let count = 0
    while (numero > count) {
        count++
    }
    return converter_count_centena(count)
}

function converter_count_unidade(numero) {
    if (numero === 0) {
        return ''
    }
    else if (numero === 1) {
        return 'I'
    }
    else if (numero === 2) {
        return 'II'
    }
    else if (numero === 3) {
        return 'III'
    }
    else if (numero === 4) {
        return 'IV'
    }
    else if (numero === 5) {
        return 'V'
    }
    else if (numero === 6) {
        return 'IV'
    }
    else if (numero === 7) {
        return 'VII'
    }
    else if (numero === 8) {
        return 'VIII'
    }
    else if (numero === 9) {
        return 'IX'
    }
    else if (numero === 10) {
        return 'X'
    }
}

function converter_count_dezena(numero) {
    if (numero === 0) {
        return ''
    }
    else if (numero === 1) {
        return 'X'
    }
    else if (numero === 2) {
        return 'XX'
    }
    else if (numero === 3) {
        return 'XXX'
    }
    else if (numero === 4) {
        return 'XL'
    }
    else if (numero === 5) {
        return 'L'
    }
    else if (numero === 6) {
        return 'LX'
    }
    else if (numero === 7) {
        return 'LXX'
    }
    else if (numero === 8) {
        return 'LXXX'
    }
    else if (numero === 9) {
        return 'XC'
    }
}

function converter_count_centena(numero) {
    if (numero === 1) {
        return 'C'
    }
    else if (numero === 2) {
        return 'CC'
    }
    else if (numero === 3) {
        return 'CCC'
    }
    else if (numero === 4) {
        return 'CD'
    }
    else if (numero === 5) {
        return 'D'
    }
    else if (numero === 6) {
        return 'DC'
    }
    else if (numero === 7) {
        return 'DCC'
    }
    else if (numero === 8) {
        return 'DCCC'
    }
    else if (numero === 9) {
        return 'CM'
    }
}


main()